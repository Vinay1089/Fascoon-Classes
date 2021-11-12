exports.findall=(req,res)=>{

    const db=require('../../Models');
    const News= db.News;

    News.find()
    .then(data=>{

        res.send(data)
    })
    .catch(err=>{

        res.status(500).send({

            message:err.message||'Some Error occured.'
        })
    })
}