const dbConfig = require('../Config/db.config');
const mongoose = require('mongoose');
mongoose.promise = global.promise;

const db={}

db.mongoose = mongoose;

db.url= dbConfig.url

db.News = require('../Models/news.model')(mongoose)

module.exports = db