const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const userModel=require("./models/UserModel")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/newone")
app.listen(3000, () => {
    console.log("server is running at port 3000");
})

app.post("/createUser", (req, res)=>{
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(err=>res.json(err))
})

app.get('/', (req, res) => {
    userModel.find({})
    .then(users => res.json(users))
        .catch(err=>res.json(err))
})

app.get('/getuser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(users => res.json(users))
        .catch(err=>res.json(err))
})

app.put('/updateuser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    .then(users => res.json(users))
        .catch(err=>res.json(err))
})

app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({ _id: id })
    .then(users => res.json(users))
        .catch(err=>res.json(err))
})

