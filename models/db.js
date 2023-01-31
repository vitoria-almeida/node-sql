import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize('bd_teste', process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(function() {
 console.log('Sucesso')
})
.catch(function() {
    console.log('Erro.')
})

export {sequelize}