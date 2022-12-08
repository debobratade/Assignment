const express = require('express')
const router = express.Router()

const { taskInprogress, getData } = require('./controller/controller')


router.post('/taskinprogress',   taskInprogress)   
router.get('/gettasks',   getData)   



module.exports = router