import express from 'express'
import { SignUp } from '../controllers/UserController.js'

const router = express.Router()

router.post('/signup',SignUp)

export {router as UserRoute}