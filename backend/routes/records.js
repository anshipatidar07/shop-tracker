const express = require("express")
const router = express.Router()

const Record = require("../models/Record")

// GET all records
router.get("/", async (req, res) => {

    const records = await Record.find().sort({ date: -1 })

    res.json(records)

})

// CREATE record
router.post("/", async (req, res) => {

    const record = new Record(req.body)

    await record.save()

    res.json(record)

})

// DELETE record
router.delete("/:id", async (req, res) => {

    await Record.findByIdAndDelete(req.params.id)

    res.json({ message: "Deleted" })

})

module.exports = router