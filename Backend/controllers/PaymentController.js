import Stripe from 'stripe'
const stripe=new Stripe('sk_test_51Oh4IYEyzMUhUrfVnThV1wzNrbnLyu2VplOqtktgFeFUX5JFNyYtTOrWQ2pQpMctEFBB8ojvPy4kggw1YBPbXD4I00UI1v9lBg')

export const paymentIntent=async(req,res)=>{
    try {
        const payment=await stripe.paymentIntents.create({
            amount:req.body.amount,
            currency:'usd',
            automatic_payment_methods:{
                enabled:true
            }
        })

        res.status(200).json({client_secret:payment.client_secret,success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
}