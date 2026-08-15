# Vendor Reference Sheet

A full-stack MERN app for browsing construction-material vendor submittal
PDFs (drywall, ceiling, metal, insulation, and specialty products), building
a project cover sheet (contractor/architect/owner), and managing an
authenticated user account.

## Stack

- **Frontend:** React + Vite, Tailwind CSS, styled-components, React Router,
  `pdf-lib` for client-side PDF handling
- **Backend:** Express + MongoDB (Mongoose), JWT auth in an httpOnly cookie,
  bcrypt password hashing, Nodemailer for password-reset email

## Project structure

```
client/                React + Vite frontend
  src/
    components/        One file per page/route (see App.jsx for the route table)
      Home.jsx          Vendor catalog browser + cover sheet builder (the main page;
                         ~12k lines because the vendor/product catalog is inline state --
                         see the comment at the top of that file)
      Login.jsx, Signup.jsx, ForgotPassword.jsx, ResetPassword.jsx, Profile.jsx
                        Auth pages
      ExportPdf.jsx, ReferenceSheet.jsx
                        Early/stub pages, not fully built out
    config.js          Reads the backend API URL from VITE_API_URL
    App.jsx            Route table
    main.jsx           React entry point
  uploads/             Vendor submittal PDFs served as static files, organized
                       manufacturer/product-line/file.pdf
  .env.example         Template for client/.env

server/                Express + MongoDB backend
  index.js             App setup: middleware, CORS, DB connection, route mounting
  routes/user.js       All /auth/* endpoints (see API reference below)
  models/User.js       Mongoose User schema
  .env.example         Template for server/.env
```

## API reference

All routes are mounted under `/auth` (e.g. `POST /auth/login`). Auth uses a
JWT stored in an httpOnly cookie, so the client must send requests with
credentials included (`axios.defaults.withCredentials = true`).

| Method | Route                          | Body                         | Description                                            |
| ------ | ------------------------------ | ----------------------------- | -------------------------------------------------------- |
| POST   | `/auth/signup`                 | `username, email, password`  | Create an account (password is bcrypt-hashed)             |
| POST   | `/auth/login`                  | `email, password`            | Verify credentials, set a 1-hour JWT cookie                |
| POST   | `/auth/forgot-password`        | `email`                      | Email a password-reset link (5-minute token)               |
| POST   | `/auth/reset-password/:token`  | `password`                   | Set a new password using the emailed token                 |
| GET    | `/auth/verify`                 | --                            | Check whether the request's cookie is a valid session      |
| GET    | `/auth/logout`                 | --                            | Clear the auth cookie                                      |

## Features

- Browse vendor product submittal PDFs by category (Drywall, Ceiling,
  Metal, Insulation, Specialty), organized by manufacturer and sub-vendor
- Search across vendors/products
- Build a project cover sheet (contractor / architect / owner) and checklist
- Signup / login / logout with JWT sessions
- Forgot-password flow: emailed reset link with a short-lived signed token

## Running it locally

Requires Node.js and a local MongoDB instance (`mongod` running on the
default port, or point `MONGO_URI` at your own).

```bash
# Server
cd server
npm install
cp .env.example .env   # fill in KEY (any random string) -- see below
npm start

# Client (separate terminal)
cd client
npm install
cp .env.example .env   # defaults are fine for local dev
npm run dev
```

Open `http://localhost:5173`.

**Generating a value for `KEY`:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

`EMAIL_USER` / `EMAIL_PASS` are only needed for the forgot-password email
flow -- everything else works without them. Use a Gmail
[App Password](https://myaccount.google.com/apppasswords), never a real
account password.

## Known limitations

- `ExportPdf` and `ReferenceSheet` are early/stub components -- vendor
  browsing, search, and auth are the parts that are fully built out.
  `ReferenceSheet` links to a `reference_sheet.xlsx` that isn't currently
  present in `client/public/`, so that button 404s until the file is added.
- The production JS bundle is large (~1.3MB) because the vendor/product
  catalog is defined inline in `Home.jsx` rather than fetched from an API
  or a data file. Splitting that out would be the next real improvement.
- A handful of moderate/high npm advisories remain in transitive
  dependencies from the original 2024 lockfile that `npm audit fix`
  (non-breaking) doesn't reach; `npm audit fix --force` would resolve them
  but wasn't run here since it can introduce breaking major-version bumps.

## History note

This repo's git history was rewritten to remove a `.env` file and a
hardcoded credential that had been committed early on, along with
~48,000 accidentally-committed `node_modules` files. If you cloned this
repo before that cleanup, re-clone rather than pulling.
