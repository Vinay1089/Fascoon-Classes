const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

var corsOptions={
    origin:true
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser. urlencoded({
    extended:true
}))
//Connecting to the Datebase.
const db= require("./Models");
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{

    console.log("Connected to Database");
}).catch(err=>{

    console.log("Not connected to Datebase", err)
    process.exit();
})
const init= require("../server/Models/initial.models");
init();

app.get('/',(req,res)=>{

    res.send("<h1>Welcome to JWT Express Server!</h1>")
})
const PORT=5000;
app.listen(PORT,()=>{

    console.log(`Server started at port ${PORT}`)
})