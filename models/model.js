const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    name:{type:String,require:true},
    password:{type:String,require:true}
})
 const collection = mongoose.model("userModel",userSchema)

 module.exports = collection;