const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    let name=req.query.name;
    let age=req.query.age;
    if(!name && !age){
        name="Esme";
        age=30
        age=parseFloat(age);
    }
    res.send(`Welcome ${name} ,Age: ${age}`);
    // res.render(`Welcome ${name} ,Age: ${age}`);
});
app.listen(3000);