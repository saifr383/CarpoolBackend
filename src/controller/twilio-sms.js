
const client=require('twilio')(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN,{lazyLoading:true})


const sendOTP=async (req,res)=>{
   
    const { phoneNo ,channel} = req.body
    console.log(phoneNo);
    try{
const otpResponse=await client.verify.services(process.env.TWILIO_SERVICE_SID).verifications.create({
    to:`+92${phoneNo}`,
    channel:channel || "sms",
   
});
res.status(200).send(`OTP Send Successfully: ${JSON.stringify(otpResponse)}`)
    }catch(error){
        res.status(error?.status || 200).send(error?.message||'Something went wrong');
    }

};


const verifyOTP=async (req,res)=>{
    const {phoneNo,otp}=req.body
    try{
const otpResponse=await client.verify.services(process.env.TWILIO_SERVICE_SID).verificationChecks.create({
    to:`+92${phoneNo}`,
    code:otp
});
res.status(200).send(`OTP verified Successfully: ${JSON.stringify(otpResponse)}`)
    }catch(error){
        res.status(error?.status || 200).send(error?.message||'Something went wrong');
    }

};
module.exports={sendOTP,verifyOTP}