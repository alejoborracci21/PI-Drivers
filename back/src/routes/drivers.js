const {Router} = require('express')
const  axios  = require('axios')
const {Driver} = require('../db')
const {drivers} = require('../../api/db.json')
const router = Router()

//! get all
router.get('/', async(req, res) => {

    const driversdb = await Driver.findAll()
    try {
        res.send([...driversdb, ...drivers])
    } catch (error) {
        res.send(error)
    }
})

//! get name
router.get('/name', (req, res) => {
    const {name} = req.query
    console.log(`entre a /name, ${name}`)
    try {
        const driverapi = drivers.filter((driver) => {
        if(driver.name.forename.toLowerCase() == name || driver.name.surname.toLowerCase() == name){
            return driver;
    }})
    res.send(driverapi)
    } catch (error) {
       res.send(error) 
    }
    })

//! get id
router.get('/:id', async(req, res) => {
    const {id} = req.params
    try{
        //busca el conductor en la api
       for(let i=0; i < drivers.length; i++){
           if(drivers[i].id.toString() === id){
            res.send(drivers[i])
        }
    } 
     // Si el conductor no se encuentra
    }catch (error) {
    res.status(404).send({ error: 'Conductor no encontrado' });
    }
})

//! post drivers
router.post('/', async(req, res) => {
    const {name, lastname, description, image, nation, date} = req.body;

    
    try {
    const newdriver = await Driver.create({
        name: name,
        lastname: lastname,
        description: description,
        image: image,
        nation: nation,
        date: date,
    })
    console.log(newdriver)
    res.send(`Nuevo driver creado: ${newdriver}`)
    } catch (error) {
        res.send(error)
    }
})





module.exports = router