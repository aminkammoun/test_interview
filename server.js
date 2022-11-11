const mongoose = require("mongoose");
const express = require("express");
const app = express();

const transaction = require("./routes/transaction");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

mongoose
  .connect("mongodb+srv://Amine:Amine@vasytn.1gnpw.mongodb.net/testInterview?retryWrites=true&w=majority")
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log("problem to connect to data base ", err);
  });

app.use(express.json());

app.use("/api/transactions", transaction);

//app.use("/users", usersRoutes);

const port = process.env.PORT || 63000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
