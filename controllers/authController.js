const authModels = require("../models/authModels");

exports.register = async (req, res) =>{
    const {email, password} = req.body;
    const newUser = await authModels.createUser(email, password);
    res.status(200).json({
        success: true,
        message: "Register successfully!"
        
    });
}



// login 
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const users = await authModels.findemail(email);
    // 2. check password
    if (users.password !== password) {
        return res.status(401).json({
            success: false,
            message: "Wrong password"
        });
    }

    // 3. success
    res.status(200).json({
        success: true,
        message: "Login successfully!"
        
    });
};
