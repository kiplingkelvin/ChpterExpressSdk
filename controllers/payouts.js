const express = require('express');
const router = express.Router();

router.get("/mobile-wallet", (req, res) => {
    res.status(404);
    res.json({message: "Not Found"});
});

router.get("/domestic-banks", (req, res) => {
    res.status(404);
    res.json({message: "Not Found"});
});

module.exports = router;