const CategoryController = require('../../controllers/CategoryController')

const CategoryRouter = require('express').Router()

CategoryRouter.put('/', (req, res)=>{
    CategoryController.save(req, res)
})

CategoryRouter.patch('/', (req, res)=>{
    CategoryController.update(req, res)
})

CategoryRouter.get('/:id', (req, res)=>{
    CategoryController.findOneById(req, res)
})

CategoryRouter.get('/', (req, res)=>{
    CategoryController.findAll(req, res)
})







module.exports = CategoryRouter