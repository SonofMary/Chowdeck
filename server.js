const express = require("express")
const userRouter = require("./routes/user.router")
const connectDB = require("./dataBase/dbConnection")
const app = express()

app.use(express.json()) 

require("dotenv").config()

app.get("/", function(req, res) {
    console.log("Server is running ")
    res.end("Sedeer")
})



app.use("/signup", userRouter)

connectDB()

app.listen(9000, ()=>{
    console.log("server is running http://localhost:9000")
})

