const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({

    extended:true
}))
app.use(bodyParser.json())

var corsOptions={
    
    origin:true
}
app.use (cors(corsOptions));

app.get('/',(req,res)=>{

    res.send('<h1> Welcome to the Express server</h1>')
})
//import database:
const db = require('./Models');

db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{

    console.log("Connected to Database!")
})
.catch(err=>{

    console.log("Not connected to Database",err)
    process.exit()
})

//Routes
require('../server/routes/news.routes')(app)

const PORT = 5000;
app.listen(PORT,()=>{

    console.log(`Server started at PORT ${PORT}`);
})