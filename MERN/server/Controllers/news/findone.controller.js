exports.findone=(req,res)=>{

    const db= require('../../Models')
    const News =db.News;

    const id=req.params.id;
    News.findById(id)
    .then(data=>{

        if(!data){

            res.status(404).send({

                message: `Cannot find Data by ${id}`
            })
        }
        else res.send(data)
    })
    .catch(err=>{

        res.status(500).send({

            message:err.message||'Some Error occured!'
        })
    })
}