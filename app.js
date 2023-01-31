import express from 'express'
import {sequelize} from './models/db.js'

const app = express()
const port = 8080

app.listen(port, () => {
    console.log('servidor rodando')
})

app.get('/', async(req, res) => {
    return res.send('Pagina Inicial')
})