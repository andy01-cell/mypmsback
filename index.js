const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const identificationRouters = require("./src/routes/IdentificationRouters");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorizaton');
  next();
})

app.use("/identification", identificationRouters);

app.listen(4700 || process.env.PORT, () => {
  console.log("port 5000")
});

