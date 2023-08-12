var express = require("express")
var app = express();
var path = require ("path");
var mongoose = require("mongoose");
var port = 5000

app.use("/form", express.static(path.join(__dirname,"static")))    

mongoose.connect("mongodb+srv://bazalmahmod:1204@cluster0.u4854wa.mongodb.net/")
.then (() => console.log("mongodb is connected"))
.catch (() => Console.log("err"))

const route = require("./routers/routes");
app.use("/" ,route)

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/static/login.html"))
})


app.listen(port,console.log("server is running now ...."));