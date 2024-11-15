const express = require("express");
var bodyParser = require("body-parser");

const userRoutes = require("./routes/user");

const app = express();
//MIDDLEWARES
app.use(bodyParser.json());

app.use("/user", userRoutes);
////////////////////////////

app.get("/", (req, res) => {
  res.send("hello world");
});
//STARTING UP SERVER TO LISTEN TO INCOMING REQUEST
app.listen("8080", () => {
  console.log("server is started");
});
