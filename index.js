require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')

const twiliorouter=require('./src/routes/twilio-sms')
const app=express()


const port=process.env.PORT;
console.log(port)
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/twilio-sms',twiliorouter)

app.get('/',()=>{
    
   })

app.listen(port,()=>{console.log(`server started${port}`)})