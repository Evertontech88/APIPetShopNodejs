const ModelCachorro = require('../models/cachorro')
const bcrypt = require ('bcrypt')
const SALT = 10
const jwt = require ('jsonwebtoken')
//criando a classe 


class ServiceCachorro {
   async GetCachorro() {
        return ModelCachorro.findAll()
    }

    async CreateCliente(nome, raca) {

        if (!nome || !raca ){

            throw new Error("Favor preencher todos dados")
        }
        //criptogravar senha
        const hashSenha = await bcrypt.hash(raca, SALT)
        return ModelCachorro.create({nome, raca: hashSenha, })

    }

    async UpdateCliente(id, nome, raca, ) {
    if(!id ||!nome || !raca ){

        throw new Error("Favor informar o id")
    }
    const cachorro = await ModelCachorro.findByPk(id)
    if(!cachorro){

        throw new Error("Cliente não encontrada")
    }
      cachorro.nome = nome || cachorro.nome
      cachorro.raca = raca 
      ? await bcrypt.hash(raca, SALT)
      : cachorro.raca
      cachorro.raca =  raca || cachorro.raca

      cachorro.save()
      return cachorro
      

    }

    async DeleteCliente(id) {
        const cachorro = await ModelCachorro.findByPk(id)

        if(!cachorro) {
        throw Error("Cachorro nao encontrado")
        }
        return cachorro.destroy({id})
    }

async Login( raca){

    if(!raca) {
        throw new Error ("Raca ou senha invalido")
    }
    const cachorro = await ModelCachorro.findOne({where: {raca}})

    if(!cachorro) {
        throw new Error ("Raca INVALIDO")
    }

    const senhaValida = brcypt.compare(raca, cachorro.raca)
    if(!senhaValida) { 
        throw new Error(" cachorro ou senha invalido")
    }

    return jwt.sign({id: Cachorro.id}, 'segredo', { expiresIn: 60 * 60})
   
}

}
module.exports = new ServiceCachorro()