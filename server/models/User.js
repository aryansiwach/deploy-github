// Mongoose schema for a registered user account.
// `password` always holds a bcrypt hash (see routes/user.js) -- the
// plaintext password is never stored.
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const UserModel = mongoose.model("User", UserSchema)

export {UserModel as User}