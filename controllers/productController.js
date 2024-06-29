const Product = require('../models/Product')
const {StatusCodes} = require('http-status-codes');


const createProduct = async (req, res) => {
    res.send('create product')
}

const getAllProducts = async (Req, res) => {
    res.send('list all products')
}


module.exports = {createProduct, getAllProducts}