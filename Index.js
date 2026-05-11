require('dotenv').config()
const express = require('express')

const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 3000
 
app.engine(
    'hbs',
    exphbs.engine({
        extname:'hbs',
        partialsDir: path.join(__dirname, 'VIEWS/PARTIALS'),
        layoutsDir: path.join(__dirname, 'VIEWS/LAYOUTS'),
        defaultLayout: 'home.hbs'
    })
);
