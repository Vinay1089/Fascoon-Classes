exports.update=(req,res)=>{

    const db= require('../../Models')
    const News =db.News;

    const id=res.params.id;

    if(!res.data){

        res.status(500).send({

            message: 'Data to update cannot be Empty!'
        })
    }
    News.findByIDAndUpdate(id,res.body,{
        useFindAndModify:true
    })
    .then(data=>{

        if(!data){

            res.status(404).send({

                message:`Cannot update data by ${id}`
            })
        }
        else res.send({

            message: "Updated Successfully!"
        })
    })
    .catch(err=>{

        message: err.message || 'Cannot update Data!'
    })
}