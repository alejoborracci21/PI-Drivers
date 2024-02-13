const {Router} = require('express')
const  axios  = require('axios')
const URL = ''

const route = Router()

route.get('/', async(req, res) => {
    try {
        res.send('get a ruta teams/')
    } catch (error) {
        res.send(error)
    }
})

module.exports = route