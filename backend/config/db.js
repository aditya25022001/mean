import { connect } from 'mongoose'
import { config } from 'dotenv'

config()

export const db = async() => {
    try{
        const con = await connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
        console.log(`MongoDB connected successfully at ${con.connection.host}...`);
    }
    catch(error){
        console.error(`Failed to connect mongoDB, error : ${error.message}...`);
        process.exit(1);
    }
}