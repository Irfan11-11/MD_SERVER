const express = require('express')
const userContoller = require('../controller/userController')
const detailsController = require('../controller/detailsController')
const jwtMiddleware = require('../middleeares/jwtMiddleware')

const router = new express.Router()

//register
router.post('/register',userContoller.register)

//login
router.post('/login',userContoller.login)

//get all details
router.get('/all-details',jwtMiddleware,detailsController.getAllDetails)

module.exports = router