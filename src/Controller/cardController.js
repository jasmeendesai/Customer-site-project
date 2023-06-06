const cardModel = require("../Model/cardModel")
const customerModel=require("../Model/customerModel")

const createCard = async function(req, res){
    const data = req.body;
    const card = await cardModel.create(data);
    res.send(card)
}

const getCard = async function(req, res){
    const cardData = await cardModel.find()
    res.send(cardData)
}


module.exports.createCard = createCard;
module.exports.getCard = getCard;