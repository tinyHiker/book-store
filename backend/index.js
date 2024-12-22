const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()

//routes

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
})) 
const bookRoutes = require("./src/books/book.route")
const orderRoutes = require("./src/orders/order.route")
const userRoutes = require("./src/users/user.route")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)


async function main(){
    await mongoose.connect(process.env.DB_URL)

    app.use('/', (req, res) => {
        res.send("Welcome horse-face!")
    
    })
}

main().then(() => console.log("Mongodb connected successfully")).catch((err) => console.log(err))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})