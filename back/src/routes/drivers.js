const {Router} = require('express')
const  axios  = require('axios')
const {Driver} = require('../db')
const { Op } = require('sequelize');
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
router.get('/name', async (req, res) => {
    const { name } = req.query;
    console.log(`Entré a /name, ${name}`);

    try {
        // Buscar en la base de datos
        const driverdb = await Driver.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name.toLowerCase()}%`,
                },
            },
        });

        // Filtrar en el array local
        const driverapi = drivers.filter((driver) => {
            const forenameLower = driver.name.forename.toLowerCase();
            const surnameLower = driver.name.surname.toLowerCase();
            return forenameLower.includes(name.toLowerCase()) || surnameLower.includes(name.toLowerCase());
        });

        console.log('Driver DB:', driverdb);
        console.log('Driver API:', driverapi);

        // Enviar la combinación de resultados de la base de datos y del array local
        res.send([...driverdb, ...driverapi]);
    } catch (error) {
        console.error('Error al buscar conductores por nombre:', error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

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
    const {name, description, image, nation, teams, date} = req.body;

    
    try {
    const newdriver = await Driver.create({
        name: name,
        description: description,
        image: image,
        teams: teams,
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