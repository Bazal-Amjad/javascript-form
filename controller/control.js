var collection = require("../models/model");

const signup = async (req,res) =>{
    const data = {
        name: req.body.username,
        password: req.body.password
    }
await collection.insertMany([data]);
res.sendStatus(200);
};
const login = async (req, res) =>  {
    try {
        const check = await collection.findOne({name: req.body.username})
        if (check.password === req.body.password)
        {
            res.Send(200);
        }
        else {
            res.Send("wrong password");
        }
    } catch (err) {
        ("wrong details")
    }
};

module.exports = { signup, login};