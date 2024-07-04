const express = require("express")
const db = require("./db")
const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("servidor iniciado")
})

app.get("/students", (req,res) => {
    res.json(db)
})

app.get("/students/:id", (req,res) => {
const id = parseInt(req.params.id)
const getstudent = db.find ((student) => student.id === id)

res.json(getstudent)
})

