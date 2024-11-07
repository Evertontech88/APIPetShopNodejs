const database = require('../config/database')

 
class ModelCachorro {

    constructor() {

        this.model = database.db.define('cachorros',{
            id: {
                type:database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type:database.db.Sequelize.STRING
            },
            

            raca: {
                type:database.db.Sequelize.STRING,
                unique:true
            },
           
        })
    }
 }

module.exports = new ModelCachorro().model