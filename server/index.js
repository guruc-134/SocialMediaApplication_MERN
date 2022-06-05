import express from "express"
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from "cors"
import postRoutes from './routes/posts.js'
const app = express()

// indicating all the routes inside the postRoutes will start with the url /posts
app.use('/posts',postRoutes)
app.use(bodyParser.json({limit:"30mb",extended :"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended :"true"}))
app.use(cors());


const CONNECTION_URL = "mongodb+srv://guruc003:lBjp5z0VA9Aefuug@cluster0.kustci8.mongodb.net/?retryWrites=true&w=majority"
const  PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log("server is running on port:",PORT)
))
.catch((error)=>console.log(error.message))