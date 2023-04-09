import Product from "../model/product.js";
import asyncHandler from 'express-async-handler'

export const getAllProducts = asyncHandler(async(req,res) => {
    const products = await Product.find({});
    if(products) res.status(200).json({
        message:"Products fetched successfully",
        products
    })
    else res.status(500).json({
        message:"Error fetching products"
    })
})

export const getProductById = asyncHandler(async(req,res) => {
    const productId = req.params.productId;
    const product = await Product.findOne({ productId });
    if(product) res.status(200).json({
        message:"Product fetched successfully",
        product
    })
    else res.status(404).json({
        message:"Product not found"
    })
})

export const addProduct = asyncHandler(async(req,res) => {
    const { productName, modelYear, price, description } = req.body
    if(!productName || !modelYear || !price || productName==="" || modelYear==="" || price===0){
        res.status(400).json({ message:"all fields are required" });
    }
    else{
        const product = await Product.create({
            productName, modelYear, price, description
        })
        if(product) res.status(201).json({
            message:"Product created successfully",
            productName, modelYear, price, description, productId:product.productId
        })
        else res.status(500).json({
            message:"Error creating product"
        })
    }
})

export const updateProduct = asyncHandler(async(req,res) => {
    const productId = req.params.productId
    const { productName, modelYear, price, description } = req.body
    const product = await Product.findOne({ productId });
    if(product){
        const updatedProduct = await Product.findOneAndUpdate({ productId },{ productName, modelYear, price, description })
        if(updatedProduct) res.status(201).json({
            message:"Product updated successfully",
            productId, productName, modelYear, price, description
        })
        else res.status(500).json({
            message:"Error updating product"
        })
    }
    else{
        res.status(404).json({ 
            mesage:"Product not found"
        })
    }
})

export const deleteProduct = asyncHandler(async(req,res) => {
    const productId = req.params.productId
    const product = await Product.findOne({ productId })
    if(product){
        await Product.deleteOne({ productId })
        res.status(200).json({
            message: 'Product deleted successfully'
        })
    }
    else res.status(404).json({
        message:"Product not found"
    })
})