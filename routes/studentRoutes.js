const { Router } = require("express")
const express= require("express")
const route= express.Router()

const studentController= require("../controllers/studentControllers")  


route.post('/student/add' ,studentController.createStudent)
route.get('/student/:studentId' ,studentController.getStudentById)

module.exports=route