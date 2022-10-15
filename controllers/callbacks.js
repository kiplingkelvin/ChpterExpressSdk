const express = require('express');
const router = express.Router();

router.get("/mpesa-payment", (req, res) => {

    res.status(404);
    res.json({message: "Not Found"});

});

router.get("/card-payment", (req, res) => {

    res.status(404);
    res.json({message: "Not Found"});

});

router.get("/mobile-payout", (req, res) => {

    res.status(404);
    res.json({message: "Not Found"});

});

router.get("/domestic-banks-payout", (req, res) => {

    res.status(404);
    res.json({message: "Not Found"});

});

module.exports = router;