

// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")

// const app = express()
// const PORT = process.env.PORT || 5000


// app.use(cors({
//   origin: "https://anshipatidar07.github.io",
//   methods: ["GET", "POST", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type"],
//   credentials: false
// }))

// // VERY IMPORTANT (handles preflight)
// app.options("*", cors())
// app.use(express.json())

// // MongoDB connection
// mongoose.connect(
//   "mongodb+srv://admin:Shop12345@shop-tracker.v3trtqm.mongodb.net/?appName=shop-tracker"
// );

// mongoose.connection.once("open", () => {
//     console.log("MongoDB connected")
// })

// // Routes
// const recordRoutes = require("./routes/records")
// app.use("/records", recordRoutes)

// app.listen(PORT, () => {
//     console.log("Server running on port " + PORT)
// })
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

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

mongoose.connect(
  "mongodb+srv://admin:Shop12345@shop-tracker.v3trtqm.mongodb.net/shop-tracker?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected")
})

const recordRoutes = require("./routes/records")
app.use("/records", recordRoutes)

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})