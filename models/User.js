import { Sequelize } from 'sequelize'
import {sequelize} from './db.js'

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

//criar a tabela
//User.sync()

export {User}
