const express=require('express');
const app=express();
const path = require('path');

const date =new Date();
const hour =date.getHours();
if(hour )

app.use('/css',express.static(path.join(__dirname,'css')));

app.get('/output',(req,res)=>{
    let name=req.query.name;
    let age=req.query.age;
    if(!name){
        name="Esme";
        age=30
        age=parseFloat(age);
    }
    res.send(`Welcome ${name} ,Age: ${age}`);
});
app.post('/result',(req,res)=>{
    let name=req.query.name;
    let age=req.query.age;
    res.redirect(`/output?name=${name}&age=${age}`);
}); 
app.listen(3000);