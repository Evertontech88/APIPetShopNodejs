const ServiceCachorro = require('../services/cachorro')

class ControllerCachorro {
   //todas as funções do controller, recebem req, res


   async GetCachorro(req, res) {
      //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)
      try {
         const cachorro = await ServiceCachorro.GetCachorro()
         res.send({ msg: cachorro })



      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })

      }
   }
   async CreateCachorro(req, res) {

      try {

         const { nome, raca,  } = req.body

         const cachorro = await ServiceCachorro.CreateC(nome, raca)
         res.send({ msg: cachorro })

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })

      }
   }

   async UpdateCachorro(req, res) {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)

      try {

         const id = req.params.id
         const nome = req.body.nome
         const raca = req.body.raca
    

         const cachorro = await ServiceCachorro.UpdateCachorro(id, nome, raca)
         res.send({ msg: cachorro })

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })
      }

   }
   async DeleteCachorro(req, res) {   //todas funções do controller tem try cath, quadrinho, (tenta executar ou capturar um erro)

      try {
         const id = req.params.id
         await ServiceCachorro.DeleteCachorro(id)
         res.status(204).send()

      } catch (error) {
         //todo cath vai ser assim
         res.status(500).send({ msg: error.message })
      }
   }


async Login(req,res){

   try {
      const { raca} = req.body
      const token = await ServiceCachorro.Login(raca)
      res.status(200).send({token})
   } 
   catch (error){
      res.status(500).send({ msg: error.message})
   
   }

 
  }
}

module.exports = new ControllerCachorro()