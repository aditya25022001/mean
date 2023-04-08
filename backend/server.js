import express from 'express'
import { config } from 'dotenv'

config()

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hello world!, this is mean app backend..");
});

app.listen(PORT,`Server running on port ${PORT} in ${NODE_ENV} mode...`)