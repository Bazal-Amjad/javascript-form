var express = require("express")
var route = express.Router();
var au = require("../controller/control")

route.post("/form" , au.signup )
route.post("/formpost" , au.login )

module.exports = route;
