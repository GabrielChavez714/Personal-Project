require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const cartCtrl = require('./controllers/cartController');
const productCtrl = require('./controllers/productController');
const userCtrl = require('./controllers/userController');


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 10 * 365 * 24 * 60 * 60
        }
    })
);
  
app.get('/auth/session', userCtrl.getSession);
app.post('/auth/register', userCtrl.register);
app.post('/auth/login', userCtrl.login);
app.get('/auth/session', userCtrl.getSession);

app.get('/api/product', productCtrl.getAllProduct);
app.post('/api/product', productCtrl.bookProduct);

app.get('/api/cart', cartCtrl.getCart);
app.put('/api/cart/:product_id');
app.delete('/api/cart/:product_id');

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((db) => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => console.log(`Listening in on "the best server in the world" ${SERVER_PORT}`))
}).catch(err => {
    console.log(err)
});