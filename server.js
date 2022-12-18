const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
require('dotenv').config()
const bodyParser=require('body-parser')
require("./src/config/db.config");

const twiliorouter=require('./src/routes/twilio-sms')
const authroute=require('./src/routes/auth.routes')



const app = express();



app.use('/twilio-sms',twiliorouter)

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "carpool-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Carpool application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




app.use(authroute)
