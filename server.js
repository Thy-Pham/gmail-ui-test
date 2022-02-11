// go node-express

const express = require('express');
const app = express();
const port = 3002;

require('./middlewares/handlebars')(app);

// require('./middlewares/session')(app);

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// middleware parse request body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
    // res.render("home", {
    //     cssP: () => 'css',
    //     navP: () => 'nav',
    //     footerP: () => 'footer'
    // });
    res.render("home");
});

// co the goi toi http://localhost:3000/cal.html
app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));