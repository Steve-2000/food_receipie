const express = require('express');
const { getreceipes,getreceipe,addreceipe,deletereceipe,updatereceipe} = require('../controller/receipe');
const router=express.Router();
router.get('/',getreceipes)
router.get('/:id',getreceipe);
router.post('/:id',addreceipe);
router.put('/:id',updatereceipe);
router.delete('/:id',deletereceipe);


module.exports=router;
    