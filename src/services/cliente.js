const ModelCliente = require('../models/cliente')
const bcrypt = require ('bcrypt')
const SALT = 10
const jwt = require ('jsonwebtoken')
//criando a classe 


class ServiceCliente {
   async GetClientes() {
        return ModelCliente.findAll()
    }

    async CreateCliente(nome, endereco, telefone) {

        if (!nome || !endereco || !telefone){

            throw new Error("Favor preencher todos dados")
        }
        //criptogravar senha
        const hashSenha = await bcrypt.hash(endereco, SALT)
        return ModelCliente.create({nome, endereco: hashSenha, telefone})

    }

    async UpdateCliente(id, nome, endereco, telefone) {
    if(!id ||!nome || !endereco || !telefone){

        throw new Error("Favor informar o id")
    }
    const cliente = await ModelCliente.findByPk(id)
    if(!cliente){

        throw new Error("Cliente não encontrada")
    }
      cliente.nome = nome || cliente.nome
      cliente.endereco = endereco 
      ? await bcrypt.hash(endereco, SALT)
      : cliente.passwordS
      cliente.telefone = telefone || cliente.telefone

      cliente.save()
      return cliente
      

    }

    async DeleteCliente(id) {
        const cliente = await ModelCliente.findByPk(id)

        if(!cliente) {
        throw Error("Pessoa nao encontrada")
        }
        return cliente.destroy({id})
    }

async Login(senha, email){

    if(!senha || !email) {
        throw new Error ("Email ou senha invalido")
    }const cliente = await ModelCliente.findOne({where: {email}})

    if(!cliente) {
        throw new Error ("EMAIL INVALIDO")
    }

    const senhaValida = brcypt.compare(senha, cliente.senha)
    if(!senhaValida) { 
        throw new Error("telefone ou senha invalido")
    }

    return jwt.sign({id: pessoa.id}, 'segredo', { expiresIn: 60 * 60})
   
}

}
module.exports = new ServiceCliente()