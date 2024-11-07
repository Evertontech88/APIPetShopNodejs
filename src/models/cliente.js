const database = require('../config/database')

 
class ModelCliente {

    constructor() {

        this.model = database.db.define('clientes',{
            id: {
                type:database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type:database.db.Sequelize.STRING
            },
            
            endereco: {
                type:database.db.Sequelize.STRING,
                unique:true
            },
            telefone: {
                type: database.db.Sequelize.STRING
            }
        })
    }
 }

module.exports = new ModelCliente().model