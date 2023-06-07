const cardModel = require("../Model/cardModel")
const customerModel=require("../Model/customerModel")
const validator = require("../util/validator")

const createCard = async function(req, res){
    try{
    const cardDetails = req.body;

    if (!validator.isValidRequestBody(cardDetails)) {
        return res.status(400).send({ status: false, message: "Enter card details" })
    }

    const {cardType, customerName, status,vision} = cardDetails

    // cardType: {type: String,enum: ['REGULAR', 'SPECIAL'],required: true}
    const cardEnm = ['REGULAR', 'SPECIAL']
    if(!cardType){
        return res.status(400).send({ status: false, message: "cardType is required" })
    }
    if (!validator.isValid(cardType) || !cardEnm.includes(cardType)) {
        return res.status(400).send({ status: false, message: "enter valid cardType" })
    }

    //   customerName: {type: String,required: true},
    if(!customerName){
        return res.status(400).send({ status: false, message: "customerName is required" })
    }
    if (!validator.isValid(customerName)) {
        return res.status(400).send({ status: false, message: "enter valid customerName" })
    }

    //   status: {type: String, enum: ['ACTIVE', 'INACTIVE'],default: 'ACTIVE'},
    const enm = ["ACTIVE", "INACTIVE"]
    if (!validator.isValid(status) || !enm.includes(status)) {
        return res.status(400).send({ status: false, message: "enter valid status" })
    }

    //   vision: String,
    if (!validator.isValid(vision)) {
        return res.status(400).send({ status: false, message: "enter valid vision" })
    }

    //   customerID: {type: mongoose.Schema.Types.ObjectId,ref: 'customer',required: true}
    if(!customerID){
        return res.status(400).send({ status: false, message: "customerID is required" })
    }
    if (!validator.isValid(customerID) || !validator.isValidObjectId(customerID)) {
        return res.status(400).send({ status: false, message: "enter valid customerID" })
    }


    // cardNumber: {type: String,unique: true,required: true}

    const count = await customerModel.find().count()
    cardDetails.cardNumber = `C00${count}`
    const cardNumExist = await cardModel.findOne({cardNumber : data.cardNumber})
    if(cardNumExist) {
        count++;
        data.cardNumber = `C00${count}`
    }
    const card = await cardModel.create(cardDetails);
    return res.status(201).send({ status: true, data: card });
    }catch(error){
        return res.status(500).send({ status: false, message : error.message })
    }
}

const getCard = async function(req, res){
    try{
        const cardData = await cardModel.find()
        if(cardData.length == 0){
            return res.status(404).send({ status: false, message : "no card data present" })
        }
        return res.status(200).send({ status: true, data: cardData });
    }catch(error){
        return res.status(500).send({ status: false, message : error.message })
    }
}


module.exports = {createCard, getCard};




//===============================================

// cardNumber: {type: String,unique: true,required: true},
//   cardType: {type: String,enum: ['REGULAR', 'SPECIAL'],required: true},
//   customerName: {type: String,required: true},
//   status: {type: String, enum: ['ACTIVE', 'INACTIVE'],default: 'ACTIVE'},
//   vision: String,
//   customerID: {type: mongoose.Schema.Types.ObjectId,ref: 'customer',required: true}