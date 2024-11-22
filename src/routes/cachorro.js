const express = require('express')
const ControllerCachorro = require('../controllers/cachorro')
const auth = require ("../middleware/auth")

// iniciaçizando as rotas do express
const router = express.Router()


router.post('/', ControllerCachorro.CreateCachorro)
router.get('/',auth,ControllerCachorro.GetCachorro)
router.put('/:id',auth, ControllerCachorro.UpdateCachorro)
router.delete('/:id',auth, ControllerCachorro.DeleteCachorro)


// criando as rotas
//routers.get('/', (req,res) => {
   // res.send({msg: 'funcionou'})
//})
//exportando a rota
module.exports= router