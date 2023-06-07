const express = require('express');
const router = express.Router();

const cardController = require("../Controller/cardController")
const customerController = require("../Controller/customerController")

router.post("/createCard", cardController.createCard)
router.get("/getCard", cardController.getCard)

router.post("/createCustomer", customerController.createCustomer)
router.get("/getCustomer", customerController.getCustomer)
router.delete("/delete/:customerID", customerController.deleteCustByParam)

router.use("*", (req, res) => {
    return res.status(404).send("invalid urls");
});

module.exports = router