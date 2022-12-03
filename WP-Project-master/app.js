var express = require("express");
const path = require("path");
const hbs = require("hbs");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

const staticPath = path.join(__dirname, "./public");

mongoose.connect("mongodb://0.0.0.0:27017/pamperpaws");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

var app = express();

app.use(express.static(staticPath));
app.set("views", path.join(__dirname, "./public/views"));
console.log(__dirname);
// to set view engine
app.set("view engine", "hbs");

app.get("", (req, res) => {
  res.render("index");
});

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/sign_up", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  var phone = req.body.phone;

  var data = {
    name: name,
    email: email,
    password: pass,
    phone: phone,
  };
  db.collection("details").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });
  return res.redirect("success.html");
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("Listening on port " + app.get("port"));
});
