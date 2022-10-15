
const express = require('express');
require('dotenv').config();

const paymentController = require('./controllers/payments');
const payoutController = require('./controllers/payouts');
const callbacksController = require('./controllers/callbacks');
  
const app = express();

const server = require("http").Server(app);

app.use(express.json());

app.use('/payments', paymentController);
app.use('/payouts', payoutController);

app.use('/callbacks', callbacksController);

server.listen(process.env.PORT);