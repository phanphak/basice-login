const authModels = require("../models/authModels");

exports.register = async(req, res) =>{
    try {
        const {email, password} = req.body;
        const newUser = await authModels.createUser(email, password);
        res.status(201).json({
            success: true,
            message: "Register successfully!"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}



// login
exports.login = async(req, res) =>{
    const {email, password} = req.body;

    const userLogin = await authModels.findEmail(email);
    
    if(!userLogin || userLogin.password !== password){
        res.status(400).json({
            success: false,
            message: "Invailds email and password"
        })
    }

    // respone success 
    res.status(200).json({
        success: true,
        message: "Login successfully!",
        result: userLogin
    })
}