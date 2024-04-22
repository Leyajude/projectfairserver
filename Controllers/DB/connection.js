const mongoose=require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("mongodb atlas connected with pfServer");
    }
).catch(err=>{
    console.log("conncetion failed!!!");
    console.log(err);
})