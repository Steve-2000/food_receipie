const express = require('express');
const verifytoken = require('../middleware/auth');
const { getreceipes,getreceipe,addreceipe,deletereceipe,updatereceipe,upload} = require('../controller/receipe');
const router=express.Router();
router.get('/',getreceipes)
router.get('/:id',getreceipe);
router.post('/',upload.single('image'),verifytoken,addreceipe);
router.put('/:id',updatereceipe);
router.delete('/:id',deletereceipe);


module.exports=router;
