const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const productRouter = require('./routers/productRouters');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/product', productRouter);

module.exports = app;


