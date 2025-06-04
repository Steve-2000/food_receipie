const{Signup,Login,userDetails}=require('../controller/user')
const express=require('express')
const router=express.Router()

router.post('/signup',Signup);
router.post('/login',Login);
router.get('/user/:id',userDetails);

module.exports=router