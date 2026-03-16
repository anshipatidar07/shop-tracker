const mongoose = require("mongoose")

const RecordSchema = new mongoose.Schema({

    date: String,

    open: Number,

    close: Number,

    exp: Number,

    upi: Number,

    upiExp: Number,

    totalProfit: Number

})

module.exports = mongoose.model("Record", RecordSchema)