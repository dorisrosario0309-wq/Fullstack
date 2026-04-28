const express = require('express');
const { engine } = require('express-handlebars');
require('dotenv').config();
const path = require('path');

const app = express();


app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main', 
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'VIEWS')); 


app.use(express.static(path.join(__dirname, 'PUBLIC'))); 


app.get('/', (req, res) => {
    res.render('home'); 
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor encendido en: http://localhost:${PORT}');
});