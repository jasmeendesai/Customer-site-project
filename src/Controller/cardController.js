const cardModel = require("../Model/cardModel")
const customerModel=require("../Model/customerModel")

const createCard = async function(req, res){
    try{
    const data = req.body;
    const count = await customerModel.find().count()
    // console.log(count);
    data.cardNumber = `C00${count}`
    // console.log(data.cardNumber)
    // console.log(data)
    const card = await cardModel.create(data);
    res.send(card)
    }catch(error){
        res.status(500).send(error)
    }
}

const getCard = async function(req, res){
    const cardData = await cardModel.find()
    res.send(cardData)
}


module.exports.createCard = createCard;
module.exports.getCard = getCard;