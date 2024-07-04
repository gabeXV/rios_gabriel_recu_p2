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
app.post("/students", (req,res) =>{
    const id = new Date().getTime()
    const {fullname, age, curse} = req.body
    const newstudent = db.push({ id: id, fullname: fullname, age: age, curse: curse})
    console.log(newstudent)
    res.json ({message: "Se añadio un nuevo estudiante"})
})



























const port = process.env.port || 4321
app.listen(port, () => console.log (`servidor en puerto ${port}`))
