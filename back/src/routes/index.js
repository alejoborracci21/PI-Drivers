const { Router } = require("express");


const driversroutes = require('./drivers')
const teamsroutes = require('./teams')


const router = Router();

router.use('/drivers', driversroutes)
router.use('/teams', teamsroutes)

module.exports = router;
