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