const categoryModels = require("../models/categoryModel");

exports.getAllProduct = async (req, res) =>{
    const Allproduct = await categoryModels.getAll();
    res.status(200).json({
        success: true,
        data: Allproduct
    })
}



// create new product or post product
exports.createProduct = async(req, res) =>{
    const {name, price, category,description} = req.body;
    const  newProduct = await categoryModels.create(name, price, category,description);
    res.status(200).json({
        success: true,
        data: newProduct
    })
}