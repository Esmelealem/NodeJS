const express=require('express');
const app=express();
const http=require('http');

const { appendFil } = require('fs');
const path = require('path');
const router=express.Router();


router.get('/',(req,res)=>{
    console.log("Empty Page");
    res.sendFile(path.join(dirname,'/index.html'));
});

const banana=require('./Banana')

app.use('/',express.static(path.join(__dirname,'styles')))
app.listen(3000)

