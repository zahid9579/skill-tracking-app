const mongoose = require('mongoose')
mongoose.connect(""){
    try{
        console.log("Mongodb is connected")

    }catch(err){
        console.log("Something went wrong while connection of DB")
    }
    
}