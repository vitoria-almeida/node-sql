import express from 'express'
import { User } from './models/User.js'

const app = express()
const port = 8080

app.use(express.json())

app.listen(port, () => {
    console.log('servidor rodando')
})

app.get('/', async(req, res) => {
    return res.send('Pagina Inicial')
})

app.post('/cadastrar', async(req, res) => {
    await User.create(req.body)
        .then(() => {
            return res.json({
                error: false,
                message: "Successfully registered user!"
            })   
        })
        .catch(() => {
            return res.status(400).json({
                error: true,
                message: "ERROR"
            })
        })
})