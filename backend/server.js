import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { db } from './config/db.js'
import productRoutes from './routes/product.js'
import userRoutes from './routes/user.js'
import { notFound, errorHandler } from './middleware/error.js'

config()

db();

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

const app = express();

app.use(express.json());

app.use(cors({
    allowed:process.env.ALLOWED.split(" "),
    methods:["GET", "POST", "DELETE", "PUT"]
}))

app.use("/api/v1/users",userRoutes);

app.use("/api/v1/products",productRoutes);

app.get("/",(req,res) => {
    res.send("Hello world!, this is mean app backend..");
});

app.use(notFound)

app.use(errorHandler)

app.listen(PORT,() => console.log(`Server running on port ${PORT} in ${NODE_ENV} mode...`))