const express= require("express");
const app=express(); 
app.get('/',(req,res)=>{
    res.json({message:"Api is runing.."});
});

module.exports = app;