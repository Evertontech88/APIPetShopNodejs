const express = require('express')
const ControllerCliente = require('../controllers/cliente')
const auth = require ("../middleware/auth")

// iniciaçizando as rotas do express
const router = express.Router()


router.post('/', ControllerCliente.CreateCliente)
router.post('/login', ControllerCliente.Login)
router.get('/',auth,ControllerCliente.GetCliente)
router.put('/:id',auth, ControllerCliente.UpdateCliente)
router.delete('/:id',auth, ControllerCliente.DeleteCliente)


// criando as rotas
//routers.get('/', (req,res) => {
   // res.send({msg: 'funcionou'})
//})
//exportando a rota
module.exports= router