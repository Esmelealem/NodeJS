const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use('/views', express.static(path.join(__dirname, "views")));``
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const arr=["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
 "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
  "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

app.get("/", (req, res) => {
    let answer=null;
    res.render("form",{answer});
});
app.get("/8ball", (req, res) => {
    const index=Math.floor(Math.random() * arr.length);
    const answer=arr[index];


    res.send(answer);
});
app.listen(3000);