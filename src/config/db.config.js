const db = require("../models");

db.mongoose
  .connect(`mongodb+srv://abdullahkhan:abdullahkhan123@carpool.oe2b0ci.mongodb.net/?retryWrites=true&w=majority

  `, {
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
