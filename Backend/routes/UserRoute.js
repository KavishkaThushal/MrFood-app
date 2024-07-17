import express from 'express'
import { SignIn, SignUp } from '../controllers/UserController.js'

const router = express.Router()

router.post('/signup',SignUp)
router.post('/signin',SignIn)

export {router as UserRoute}