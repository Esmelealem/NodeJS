const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
app.use(session({secret:'salt for cookie'}));

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, "views"));


app.get('/' , (req, res)=>{
//     let name =req.query.name;
//   let age = req.query.age;
  let name =req.session.name;
  let age = req.session.age;
  if (!name && !age) {
    name = 'person';
    age = 20;
  }
//   res.send(`Welcome ${name} ,Age: ${age}`);
    res.send(`Welcome Name:${name} ,Age: ${age}`);

});

app.post('/result' , (req, res , next)=>
{
    let name =res.session.name ;
    let age = res.session.age ;
    // console.log(name);
    // console.log(age);
    // if (!name && !age) {
    //     name = 'person';
    //     age = 20;
    //   }
    // res.redirect(`/output?name=${name}&age=${age}`);
    return res.send(`index${name}$${age}`);
})

app.listen(3000);