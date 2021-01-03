const router = require('express').Router()
const controller = require('../../resourceControllers/AddressController')


router.put('/', async (req, res)=>{
  controller.save(req, res)
})

router.patch('/', async (req, res)=>{
  await  controller.update(req, res)

})

router.get('/',  (req, res)=>{
  controller.findAll(req, res)
})

router.get('/:city',  (req, res)=>{
    controller.findAllByCity(req, res)
})

router.get('/count/:count',(req,res)=>{
       controller.count(req, res)
})



module.exports = router