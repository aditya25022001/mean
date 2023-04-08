import Product from "./model/product.js";
import { products } from "./data.js";
import { db } from "./config/db.js";

db();

const importData = async() => {
    try{
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log("Data added...")
        process.exit(0)
    }
    catch(err){
        console.error(err.message);
        process.exit(1)
    }
}

const destroyData = async() => {
    try{
        await Product.deleteMany();
        console.log("Data deleted...")
        process.exit(0)
    }
    catch(err){
        console.error(err.message);
        process.exit(1)
    }
}

if(process.argv[2]==="-d") destroyData();
else importData();