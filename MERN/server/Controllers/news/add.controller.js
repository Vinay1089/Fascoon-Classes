exports.add = (req, res)=>{

    const db= require ('../../Models');
    const News =db.News;

    if(!req.body.title){

        res.status(400).send({

            message: "Content cannot be Empty."
        })
    }

    const news = new News({
        title: req.body.title,
        news: req.body.news,
        author:req.body.author,
        published:req.body.published
    })
    news.save(news)
    .then(data=>{

         res.send(data)
    })
    .catch(err=>{

        res.status(500).send({

            message: err.message || 'Some Error occured!'
        })
    })
}