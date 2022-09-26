const express=require('express');
const app=express();
const path = require('path');
app.use('/css',express.static(path.join(__dirname,'css')));

const date =new Date();
const hours =date.getHours();
app.get('/form', (req, res) => {

    const date = new Date()
    const hour = date.getHours()
    // console.log(hour)

    if(hour > 6 && hour < 18) {
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link href="css/day.css" rel="stylesheet">
        </head>
        <body>
        <div id = "div">
            // <fieldset>
                <form id="day">
                    <span>
                    <label for="name">Name 
                        <input type="text" name="name" id="name">
                    </label>
                    </span>
                    <span>
                        <label for="age">Age
                            <input type="number" name="age" id="age">
                        </label>
                    </span>
                    <span>
                        <input type="submit" name="submit" value="Submit Query">
                    </span>
                </form>
            </fieldset>
            </div>
        </body>
        </html>   
        `)
    } else {

        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link href="css/night.css" rel="stylesheet">
        </head>
        <body>
        <div id = "nt">
            <fieldset>
                <form id="id">
                    <span>
                    <label for="name">Name 
                        <input type="text" name="name" id="name">
                    </label>
                    </span>
                    <span>
                        <label for="age">Age
                            <input type="number" name="age" id="age">
                        </label>
                    </span>
                    <span>
                        <input type="submit" name="submit" value="Submit Query">
                    </span>
                </form>
            </fieldset>
            </div>
        </body>
        </html>   
        `)
    }

});


app.listen(3000);