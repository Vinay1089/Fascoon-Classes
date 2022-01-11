const mongoose = require("mongoose");

const User = mongoose.model("User", mongoose.Schema({

    userName:String,
    Email:String,
    Password:String,
    roles:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Role"
        }
      ]
}))
module.exports= User;