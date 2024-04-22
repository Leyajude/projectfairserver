const express=require('express')
const userController=require('../Controllers/userController')
const router =new express.Router()
const projectController=require('../Controllers/projectController')
const jwtMiddleware = require('../Controllers/Middlewares/jwtMiddleware')
const multerConfig = require('../Controllers/Middlewares/multerMiddleware')


//register


router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

// get user projects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

// get home projects
router.get('/home-projects',projectController.getHomeProjects)

//edit project

router.put('/edit-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),
projectController.editProject
)

//remove project

router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)
//edit project

router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)



//export router
module.exports=router