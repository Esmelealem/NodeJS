const express= require('express');
const cookieParser= require('cookie-parser')
const path=require('path');
const app= express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(cookieParser());


app.get('/', function(req,res,next){
    if(req.cookies.StudentId){
        console.log("i remember you");
    }else{
        res.cookie("student",21664, {maxAge:600000})
        console.log('Cookie added')
    }
    res.render('form');
});
app.post('/add', (req,res,next)=> {
    let cookies= req.cookies;
    res.redirect('/',cookies);
});
app.listen(3000);
