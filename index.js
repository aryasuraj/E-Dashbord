const express=require('express');
const cors=require('cors')
const port = 5000;
require('./db/config');
const User=require("./db/User");
const app=express();
// const mongoose=require('mongoose');
app.use(express.json());
app.use(cors());
//data send postman from api
app.post("/register", async(req,resp)=>{
    let user =new User(req.body);
    let result= await user.save();
         resp.send(result);
    //    resp.send(req.body);
});
//for handle the data fromm postman

app.listen(port,function(err){
       if(err){
           console.log(err);
       }
       console.log("Server is run on port::",port);
   });
app.post("/login",async (req,resp)=>{
    //    resp.send(req.body);
    let user =await User.findOne(req.body).select("-password");
    if(user){
        resp.send(user);
    }
    else{
        {result:"not user found"}
    }
})


