import express from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { UserRoute } from './routes/UserRoute.js'
dotenv.config()

const app=express()

app.use(cors())
app.use(cookieparser())
app.use(express.json())


app.use('/api/user',UserRoute)

mongoose.connect(process.env.DATABASE_URL).then(()=>(
    console.log('Database connected successfully')
)).catch((error)=>(console.log('Database connected unsuccessfully',error)))

const port=process.env.PORT || 3000

app.listen(port,()=>(console.log(`Server is running on ${port}`)))