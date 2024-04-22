require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/router')
//create an express application
const pfServer=express()
require('./Controllers/DB/connection')

//use cors in express server  
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))
const PORT=3000||process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`project fair server started at PORT:${PORT}`);
})
pfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Project Fair Server Started and Waiting for Client Request!!!</h1>`)
})