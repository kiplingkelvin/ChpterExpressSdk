const express = require('express');
const router = express.Router();
const axios = require('axios');
var qs = require('qs');
const chpter = require("@kipling/chpter");

router.get("/mpesa",  async function(req, res){

    customer = {
        "payment_method": "MPesa",
        "full_name": "John Doe",
        "location": "Nairobi",
        "phone_number": "254706347307",
        "email": "johndoe@mail.com"  };

    products = [{
            "product_id": "08",
            "product_name": "HoodEez",
            "quantity": "1",
            "unit_price": "1" }];

    amount = {
            "delivery_fee": "0",
            "discount_fee": "0",
            "total" : "1",
            "currency" : "kes"};

    callback_details = {
            "transaction_reference":  "123456789123",
            "callback_url":  "https://bfa0-197-232-140-206.in.ngrok.io/callbacks/mpesa-payment-callback" };

    var response = await chpter.mpesaPayment(customer,products,amount,callback_details);

    //Response
    //{"message":"M-PESA Payment Initiated","status":200}

    res.status(response['status']);
    res.json({status: response['status'],message: response['message'], mpesaResponse: response});

   

   });
   
router.get("/card", async function(req, res){
    
        customer = {
            "payment_method": "MPesa",
            "full_name": "John Doe",
            "location": "Nairobi",
            "phone_number": "254706347307",
            "email": "johndoe@mail.com"  };
    
        products = [{
                "product_id": "08",
                "product_name": "HoodEez",
                "quantity": "1",
                "unit_price": "1" }];
    
        amount = {
            "card_number": "4242424242424242",
            "expiry_month": "08",
            "expiry_year": "2030",
            "cvc": "123"};

        card_details = {
            "delivery_fee": "0",
            "discount_fee": "0",
            "total" : "1",
            "currency" : "kes"};
    
        callback_details = {
                "transaction_reference":  "123456789123",
                "callback_url":  "https://bfa0-197-232-140-206.in.ngrok.io/callbacks/card-payment-callback" };
    
        var response = await chpter.cardPayment(customer,products,amount, card_details, callback_details);

        //Response
        // {"message":"CARD Payment Initiated","status":200}

        res.status(response['status']);
        res.json({status: response['status'],message: response['message'], cardResponse: response});

   
});

module.exports = router;