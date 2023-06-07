const customerModel = require("../Model/customerModel");
const uuid = require('uuid');
const validator = require("../util/validator")


const createCustomer = async function (req, res) {
    try {
        const customerdetail = req.body;

        if (!validator.isValidRequestBody(customerdetail)) {
            return res.status(400).send({ status: false, message: "Enter customers details" })
        }

        const { firstName, lastName, mobileNumber, DOB, emailID, status } = customerdetail

        //validations
        //firstname validation
        if (!firstName) {
            return res.status(400).send({ status: false, message: "firstName is required" })
        }
        if (!validator.isValid(firstName)) {
            return res.status(400).send({ status: false, message: "enter valid firstName" })
        }

        //firstname validation
        if (!lastName) {
            return res.status(400).send({ status: false, message: "lastName is required" })
        }
        if (!validator.isValid(lastName)) {
            return res.status(400).send({ status: false, message: "enter valid lastName" })
        }

        // mobileNumber: {type: String, required: true, minLength: 9, maxLength: 10}

        if (!mobileNumber) {
            return res.status(400).send({ status: false, message: "mobileNumber is required" })
        }
        if (!validator.isValid(mobileNumber) || !validator.isValidMobileNum(mobileNumber)) {
            return res.status(400).send({ status: false, message: "enter valid mobileNumber" })
        }

        // DOB: {type: Date}
        const dobFormat = /^\d{4}-\d{2}-\d{2}$/
        if (!validator.isValid(DOB) || !dobFormat.test(DOB)) {
            return res.status(400).send({ status: false, message: "enter valid DOB" })
        }

        // emailID : {type : String,required: true, unique: true}
        if (!emailID) {
            return res.status(400).send({ status: false, message: "emailID is required" })
        }
        if (!validator.isValid(emailID) || !validator.isValidEmail(emailID)) {
            return res.status(400).send({ status: false, message: "enter valid emailID" })
        }
        const isEmailExist = await customerModel.findOne({ emailID: emailID })
        if (isEmailExist) {
            return res.status(400).send({ status: false, message: "emailID is already exist" })
        }


        // status : {type : String,enum : ["ACTIVE", "INACTIVE"], default: 'ACTIVE'}
        const enm = ["ACTIVE", "INACTIVE"]
        if (!validator.isValid(status) || !enm.includes(status)) {
            return res.status(400).send({ status: false, message: "enter valid status" })
        }

        // customerID : {type : String,unique : true}
        customerdetail.customerID = uuid.v4();

        const customer = await customerModel.create(customerdetail);
        return res.status(201).send({ status: true, data: customer });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const getCustomer = async function (req, res) {
    try {
        const customer = await customerModel.find({ status: "ACTIVE" });
        if (customer.length == 0) {
            return res.status(404).send({ status: false, message: "No customer data found" })
        }
        return res.status(200).send({ status: true, data: customer });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const deleteCustByParam = async function (req, res) {
    try{
        const customerID = req.params.customerID
        
        let customer = await customerModel.findOne({customerID : customerID, status : "ACTIVE"});
        if(!customer){
            return res.status(404).send({ status: false, message: "No customer data found" })
        }

        await customerModel.findOneAndUpdate(
            { customerID : customerID }, 
            { status: "INACTIVE" }, 
            { new: true })
        res.send({ status: false, message: "deleted" })
    }catch(error){
        return res.status(500).send({ status: false, message: error.message })
    }

}


module.exports = {createCustomer,getCustomer,deleteCustByParam}

//=================================================

