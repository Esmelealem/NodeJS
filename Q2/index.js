const express=require('express');
const router=express.Router();
const app=express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded());

// app.get('/',(req,res)=>{
//   // res.sendFile(__dirname +"/index.html");
//   res.sendFile(path.join(__dirname +"/index.html"));//both are similar
// })

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname,'index.html'));

})

app.get('/output',(req,res)=>{

  let name =req.query.name;
  let age = req.query.age;
  res.send(`Welcome ${name} ,Age: ${age}`);
    //res.sendFile(__dirname +"/index.html");
    //res.render('index')
});
app.post('/result',(req,res)=>{
  let name=req.body.name;
  let age=req.body.age;
 res.redirect(`/output?name=${name}&age=${age}`);
});
app.listen(3000,()=>{console.log("running")});