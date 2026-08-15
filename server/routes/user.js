// Auth routes, mounted at /auth in server/index.js.
//
//   POST /auth/signup                 create an account
//   POST /auth/login                  verify credentials, set the JWT auth cookie
//   POST /auth/forgot-password        email a short-lived password-reset link
//   POST /auth/reset-password/:token  consume that link, set a new password
//   GET  /auth/verify                 check whether the request's cookie is a valid session
//   GET  /auth/logout                 clear the auth cookie
//
// Sessions are a JWT stored in an httpOnly cookie (see login below) rather
// than a server-side session store, so `verifyUser` just checks the token
// signature/expiry on each protected request.
import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

// Create a new account. Password is hashed with bcrypt before storage.
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "user already existed" });
  }

  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  await newUser.save();
  return res.json({ status: true, message: "record registered" });
});

// Verify credentials and, on success, issue a 1-hour JWT in an httpOnly cookie.
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "user is not registered" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "password is incorrect" });
  }

  const token = jwt.sign({ username: user.username }, process.env.KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "login successfully" });
});

// Email a password-reset link containing a 5-minute JWT (via Gmail/Nodemailer).
// The link points at CLIENT_URL/resetPassword/:token.
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "user not registered" });
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
    const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
    var mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset Password",
      text: `hey there,
      here is the link to reset your password :${clientUrl}/resetPassword/${encodedToken}`,
    };

    
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "error sending email" });
      } else {
        return res.json({ status: true, message: "email sent" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// Verify the reset token from the emailed link and set a new (hashed) password.
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.json({ status: true, message: "updated password" });
  } catch (err) {
    return res.json("invalid token");
  }
});

// Middleware: rejects the request unless it carries a valid session cookie.
const verifyUser = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.json({ status: false, message: "no token" });
      }
      const decoded = await jwt.verify(token, process.env.KEY);
      next()
  
    } catch (err) {
      return res.json(err);
    }
  };
  


// Lets the client check on load whether the stored cookie is still a valid session.
router.get("/verify",verifyUser, (req, res) => {
    return res.json({status: true, message: "authorized"})
});

// Clears the auth cookie.
router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({status: true})
})


export { router as UserRouter };