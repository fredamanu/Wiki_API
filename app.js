import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import Article from "./model/article.js"
import { findAllArticles } from "./controllers/article.js"

dotenv.config({})

const app = express()
app.use(express.json())
const port = process.env.PORT
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("server connected to mongoDB")
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`)
    })
})
.catch((err)=>{
console.log("mongo connection err");
console.log(err)
process.exit(1)
})

app.get("/api/v1/articles", findAllArticles)