const Product = require('../models/Product')
const {StatusCodes} = require('http-status-codes');


const createProduct = async (req, res) => {

    const product = await Product.create(req.body)
    return res.status(201).json({success: true, product})
}

const getAllProducts = async (req, res) => {
    res.send('list all products')
}


module.exports = {createProduct, getAllProducts}