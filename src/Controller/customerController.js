const customerModel = require("../Model/customerModel");

const createCustomer = async function(req, res){
    const data = req.body;
    
    const customer = await customerModel.create(data);
    res.send(customer);
}

const getCustomer = async function(req, res){
    //query param
    

    const customer = await customerModel.find();
    res.send(customer);
}

const deleteCustByParam = async function(req, res){
    const custmId = req.params.custmId
    let customer = await customerModel.findById(custmId);
    const deletedData = await customerModel.findOneAndUpdate({_id : custmId} , {status : "INACTIVE"},{new : true})
    res.send(deletedData)
    
}



module.exports.createCustomer = createCustomer
module.exports.getCustomer = getCustomer
module.exports.deleteCustByParam = deleteCustByParam