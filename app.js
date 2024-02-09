const express=require('express')
 const mongoose=require('mongoose')
const ibrahim =express()

const bodyparser =require("body-parser")

ibrahim.use(bodyparser.json())
const carsechma =require('./Schema')
 const url = 'mongodb+srv://ibrahim:24685@ibrahimm2.da8eyon.mongodb.net/ibrahim?retryWrites=true&w=majority'


const connectdb = async () =>{
   try{
    mongoose.set('strictQuery' ,false)
    mongoose.connect(url)
    console.log("connected  to don")
   } catch(errr) {
    console.log("connected  to err")
    process.exit()
    }
}
connectdb()


app.git('/cars', async function (raq,res) {
    const car=await carsechma.find()
    res.json({"cars":cars, "status":200})
})

app.post('/cars', async function (raq,res) {
    const car =await carsechma.create(raq.body)
    res.json({"cars":cars, "status":200 ,"car":car})

})

app.put('/cars/:id', async function (raq,res) {
   let id= raq.prams.id
   await carsechma.findByIdAndupdate(id.raq.body)
    res.json({"cars":cars, "status":200})
})
app.delete('/cars/:id', async function (raq,res) {
    let id= raq.prams.id
    await carsechma.findByIdAnddelete(id)
     res.json({"cars":cars, "status":200})
 } )