const mongoose = require('mongoose');
const Favmode= mongoose.Schema({
    

   userId:{
        type:mongoose.Schema.Types.ObjectId,
    },
      receipeId:{
        type:mongoose.Schema.Types.ObjectId,
       

    }

 
},{timestramps:true});
    
 
module.exports=mongoose.model('favorites',Favmode);