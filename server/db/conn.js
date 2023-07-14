const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoDBURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoDBURI)
  .then(() => {
    console.log("connection succesful");
  })
  .catch((e) => {
    console.log(e);
  });
