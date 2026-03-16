

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect(
  "mongodb+srv://admin:Shop12345@shop-tracker.v3trtqm.mongodb.net/?appName=shop-tracker"
);

mongoose.connection.once("open", () => {
    console.log("MongoDB connected")
})

// Routes
const recordRoutes = require("./routes/records")
app.use("/records", recordRoutes)

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})