module.exports = app =>{

    const Add= require('../Controllers/news/add.controller')
    const Delete= require('../Controllers/news/delete. controller')
    const Update= require('../Controllers/news/update.controller')
    const FindOne=require('../Controllers/news/findone.controller')
    const FindAll= require('../Controllers/news/findall.controller')

    var router = require('express').Router()

    //Add
    router.post('/', Add.add)

    //Update
    router.put('/:id',Update.update)

    //delete
    router.delete('/:id', Delete.delete)

    //Findone
    router.get('/:id',FindOne.findone)

    //FindAll
    router.get('/', FindAll.findall)

    app.use('/api/news', router)
}