const mongoose = require('mongoose');
const receipemode= mongoose.Schema({
    
    title:{
        type:String,
        required:true       
    },
    description:{
        type:String,
        required:true
    },  
    ingredients:{
        type:[String],
        required:true
    },
    instructions:{
        type:String,
    
    },
    image:{
        type:String,
        
    },

 
},{timestramps:true});
    
 
module.exports=mongoose.model('receipes',receipemode);