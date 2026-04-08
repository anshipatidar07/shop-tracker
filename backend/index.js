
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv =require("dotenv")
// import dotenv from "dotenv";
dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: "https://anshipatidar07.github.io",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://anshipatidar07.github.io");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once("open", () => {
  console.log("MongoDB connected")
})

const recordRoutes = require("./routes/records")
app.use("/records", recordRoutes)

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})