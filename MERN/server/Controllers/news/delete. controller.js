exports.delete = (req, res)=>{

    const db= require ('../../Models')
    const News= db.News;

    const id = res.params.id;
    //Create this function to delete the data on mongodb.
    News.findByIdAndRemove(id)

    .then(data =>{

        if(!data){

            res.satus(404).send({

                message: `Cannot be deleted by the ID ${id}`
            })
        }
        else res.send(data)
    })
    .catch(err=>{

        res.status(500).send({

            message: err.message || 'Some Error occured'
        })
    })
}