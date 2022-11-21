const { response } = require('express');
const express = require('express');
const router = express.Router();


router.post("/mpesa-payment-callback", async function(req, res){

    //MPESA Callback Response Example
    // {
    //     id: '59539-9979965-1',
    //     transaction_reference: '123456789123',
    //     'response status': 406,
    //     amount: 1,
    //     paid: 'False',
    //     'payment status': 'Payment Incomplete.',
    //     message: 'Request cancelled by user'
    // }
    console.log(req.body)

    let callbackResponse = {
        id: req.body['id'],
        transaction_reference: req.body['transaction_reference'],
        response_status: req.body['response status'],
        amount: req.body['amount'],
        paid: req.body['paid'],
        payment_status: req.body['payment status'],
        message: req.body['message'],
    }
    res.json(callbackResponse);

});

router.get("/card-payment-callback", (req, res) => {

    //CARD Callback Response Example
    // {
    //     "id":"chp_id_1Lp4ZNKv0vSxkVAb4mS4va8e",
    //     "status":200,
    //     "payment method":"CARD",
    //     "message":"CARD Payment Success",
    //     "amount":"200",
    //     "currency": "kes",
    //     "amount captured":"200",
    //     "payment status":"Payment complete.",
    //     "transaction id": "3Lp4ZNKv0vSxkVAb0EYGJwiB",
    //     "paid": "True"
    // }

    console.log(req.body)

    let callbackResponse = {
        id: req.body['id'],
        transaction_reference: req.body['transaction_reference'],
        response_status: req.body['response status'],
        paid: req.body['paid'],
        amount: req.body['amount'],
        payment_status: req.body['payment status'],
        message: req.body['message'],
    }
    res.json(callbackResponse);

});


module.exports = router;