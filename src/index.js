const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const { engine } = require('express-handlebars');
const route = require("./router");
const db = require('../config/db')

db.connect()

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

route(app);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})