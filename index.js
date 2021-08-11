const express = require("express");
const app = express();
const port = 4000;
let d = new Date();
let hours = d.getHours();
let day = d.getDay();
let checkTime = () => day <= 2 && day >= 1 && hours <= 17 && hours >= 8 ? true : false;

//Working time
app.use(function (req, res, next) {
  checkTime() ? next() : res.sendFile(__dirname + "/public/worktime.html");
});


//Routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});
app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/services.html");
});
app.listen(port, function () {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port
  );
});
