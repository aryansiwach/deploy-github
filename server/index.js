// Express API entry point.
// Sets up the app, connects to MongoDB, and mounts the auth routes
// (server/routes/user.js) under /auth. Config comes from environment
// variables -- see server/.env.example for what's required.
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './routes/user.js'

const app = express()
app.use(express.json())
// Only the configured client origin may call this API, and cookies
// (the JWT auth cookie) are allowed to be sent cross-origin.
app.use(cors({
    origin: [process.env.CLIENT_URL || "http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/authentication'

mongoose.connect(MONGO_URI)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})