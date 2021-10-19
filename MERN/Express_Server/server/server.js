const express = require ('express');
const app= express();

//static Routes
app.get('/',(req,res)=>{

    res.send('<h1> Welcome to the MERN server</h1>')
})

app.get('/about',(req,res)=>{

    res.send('<h1>Welcome to About Page</h1>')
})

// Dynamic Routes
app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    res.send(`<h1>Welcome to the User: ${id}</h1>`)

})

// Controller Routes
const Controller =require('./Controllers/Controller');
app.get('/products',Controller.products)

//404 Routes
app.use(function(req,res,next){
    res.status(404).send('<h1> Oops! Page Not Found ......</h1>')
})


const PORT = 4000;
app.listen(PORT,()=>{

    console.log(`Server started at PORT ${PORT}`);
})