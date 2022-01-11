const mongoose= require('mongoose');
const config= require("../Config/db.config");

mongoose.Promise=global.Promise

const db = {}

db.user= require("./User.models");
db.role= require("./Roles.models");
db.url=config.url;

db.Roles=["Admin","User","Moderator"];

module.exports=db;