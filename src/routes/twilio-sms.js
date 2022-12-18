const { Router } = require('express')
const express=require('express')


const {sendOTP,verifyOTP}=require('../controller/twilio-sms')
const router=express()

router.post('/send-otp',sendOTP)
router.post('/verify-otp',verifyOTP)

module.exports=router