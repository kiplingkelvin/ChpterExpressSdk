const express = require('express');
const router = express.Router();
const axios = require('axios');
var qs = require('qs');

router.get("/mpesa",  (req, res) => {

    const url =   process.env.PAYMENTS_URL;

    const data = {
        "customer_details": {
                "payment_method": "MPesa",
                "full_name": "Kuria Testing",
                "location": "104 Riverside",
                "phone_number": "254706347307",
                "email": "kuria@chpter.co"
        },
        "products": [
            {
                "product_name": "Zima Blue Tee",
                "quantity": 1,
                "unit_price": 10
            }
        ],
        "amount": {
               "currency": "kes",
               "delivery_fee": 0,
               "discount_fee": 0,
               "total": 1
        },
        "callback_details": {
               "transaction_reference":  "chpter Testing Ref",
               "callback_url":  "https://chpter.co/callback-webhook/"
        }
        };
    
    headers= {'Authorization':'Token ' + process.env.CHPTER_TOKEN,
              'domain': process.env.DOMAIN};

    const options = {
        method: 'POST',
        headers: headers,
        data: data,
        url,
    };

    axios(options)
            .then(function (response) {
                res.status(200);
                res.json({message: response.data});
                console.log(response.data);
            })
            .catch(function (error) {
                res.status(404);
                res.json({message:error});
                console.log(error);
            });

   

   });
   
router.get("/card", (req, res) => {

    const url =   process.env.PAYMENTS_URL;

    const data = {
        "customer_details": {
                "payment_method": "CARD",
                "full_name": "John Doe",
                "location": "Nairobi",
                "phone_number": "254712333444",
                "email": "johndoe@mail.com"
        },
        "products": [
            {
                "product_name": "Zima Blue Tee",
                "quantity": 1,
                "unit_price": 10
            }
        ],
        "amount": {
               "currency": "kes",
               "delivery_fee": 0,
               "discount_fee": 0,
               "total": 1
        },
        "card_details": {
            "card_number": "4242424242424242",
            "expiry_month": "08",
            "expiry_year": "2030",
            "cvc": "123"
        },
        "callback_details": {
               "transaction_reference":  "chpter Testing Ref",
               "callback_url":  "https://chpter.co/callback-webhook/"
        }
        };
    
    headers= {'Authorization':'Token ' + process.env.CHPTER_TOKEN,
              'domain': process.env.DOMAIN};

    const options = {
        method: 'POST',
        headers: headers,
        data: data,
        url,
    };

    axios(options)
            .then(function (response) {
                res.status(200);
                res.json({message: response.data});
                console.log(response.data);
            })
            .catch(function (error) {
                res.status(404);
                res.json({message:error});
                console.log(error);
            });
   
});

module.exports = router;