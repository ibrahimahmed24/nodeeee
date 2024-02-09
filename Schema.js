const mongoose=require('mongoose')
const Schema =mongoose.Schema

const carsechma = new Schema({
    model:string,
    color:string,
    yeas:Number,
    
})

module.exports=mongoose.Model('cars',carsechma )