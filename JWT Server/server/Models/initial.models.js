const db= require("../Models");
const Role=db.role;

module.exports= initial = ()=>{

    Role.estimatedDocumentCount((err,count)=>{

        if(!err && count === 0){

            new Role({
                name:"User"
            }).save(err=>{

                if(err){

                    console.log("error",err)
                }
                console.log("Added 'User' to roles collections");
            })
            new Role({
                name:"Admin"
            }).save(err=>{

                if(err){

                    console.log("error",err)
                }
                console.log("Added 'Admin' to roles collections");
            })
            new Role({
                name:"Modrator"
            }).save(err=>{

                if(err){

                    console.log("error",err)
                }
                console.log("Added 'Modrator' to roles collections");
            })
        }
    })
}