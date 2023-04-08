import { Schema, model } from 'mongoose'
import { ulid } from 'ulid'

const productSchema = Schema({
    productId:{
        type:String,
        required:true,
        default:ulid()
    },
    productName:{
        type:String,
        required:true
    },
    modelYear:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:false
    }
},{
    timestamps:true
}) 

const Product = model("product",productSchema,"products");

export default Product;