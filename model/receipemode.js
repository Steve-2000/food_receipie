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
        type:Array,
        required:true
    },
    instructions:{
        type:String,
    
    },
    image:{
        type:String,
        
    },
   time:{
        type:String
    },
      createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        

    }

 
},{timestramps:true});
    
 
module.exports=mongoose.model('receipes',receipemode);