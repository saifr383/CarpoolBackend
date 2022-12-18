const db = require("../models");

db.mongoose
  .connect(`mongodb://0.0.0.0:27017`, {
    dbName: process.dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
