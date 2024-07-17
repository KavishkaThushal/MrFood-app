import express from 'express';
import { paymentIntent } from '../controllers/PaymentController.js';

const router=express.Router();

router.post('/payment',paymentIntent);

export {router as PaymentRouter}