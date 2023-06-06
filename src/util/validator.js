// let validkeys = /^[A-Za-z]+$/;

//     // firstName: { type: String, required: true }
//     if(!data.firstName) return res.status(400).send({status : false, message:"firstName is required"});
//     if(typeof data.firstName !=="string" || !validkeys.test(data.firstName)) return res.status(400).send({status : false, message:"enter valid firstName"})
    

//     //   lastName: {type: String, required: true}
//     if(!data.lastName) return res.status(400).send({status : false, message:"lastName is required"});
//     if(typeof data.lastName !=="string" || !validkeys.test(data.lastName)) return res.status(400).send({status : false, message:"enter valid lastName"})

//     //   mobileNumber: {type: String, required: true, minLength: 9, maxLength: 10}
//     let numValidkeys = /^[0-9]+$/;
//     let mobile = data.mobileNumber
//     if(!mobile) return res.status(400).send({status : false, message:"mobileNumber is required"});
//     if(typeof mobile !=="string" || !numValidkeys.test(mobile)) return res.status(400).send({status : false, message:"enter valid mobileNumber"})
//     if(mobile.length !== 10) return res.status(400).send({status : false, message:"mobileNumber should be of 10 digit"});

//     //   DOB: {type: Date}
    
//     if(typeof data.DOB !=="string") return res.status(400).send({status : false, message:"enter valid DOB"})

//     // emailID : {type : String,required: true, unique: true}

//     const email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; //jasmeen@gmail.com

//     if(!data.email) return res.status(400).send({status : false, message:"email is required"});
//     const emailId = await customerModel.find(data.email);
//     if(emailId.length>0) return res.status(400).send({status : false, message:"email Id should should be unique"})
//     if(typeof data.email !=="string" || !email.test(data.email)) return res.status(400).send({status : false, message:"enter valid email"})
     
//     // address : String,

//     if(typeof data.address !=="string") return res.status(400).send({status : false, message:"enter valid address"})

//     // customerID : {type : String,unique : true}

//     if(typeof data.customerID !=="string") return res.status(400).send({status : false, message:"enter valid customerID"})
//     const id = await customerModel.find(data.customerID);
//     if(id.length>0) return res.status(400).send({status : false, message:"customer Id should should be unique"})

//     // status : {type : String,enum : ["ACTIVE", "INACTIVE"], default: 'ACTIVE'}
//     const enm = ["ACTIVE", "INACTIVE"] 
    
//     if(typeof data.status !=="string" || !enm.includes(data.status)) return res.status(400).send({status : false, message:"enter valid status"})