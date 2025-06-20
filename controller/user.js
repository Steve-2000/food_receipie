const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const dotenv=require('dotenv').config();

const usermodel =require('../model/usermode')
const Signup=async(req,res)=>{

const {email,password}=req.body;
if(!email || !password)
{
    res.status(400).json({message:"required"})

   

}
 let user= await usermodel.findOne({email})
    if(user){
        return res.status(400).json({message:"user exist"}) 
    }
    console.log("user already")
const hpw=await bcrypt.hash(password,10)
const newuser= await usermodel.create({email,password:hpw})
 console.log("user scess")
let token=jwt.sign({email,id:newuser.id},process.env.securekey)
return res.status(200).json({token,user:newuser})

}


 

const Login = async (req, res) => {
  const { email, password } = req.body;

  // 1. Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Fill both email and password" });
  }

  // 2. Check if user exists in the database
  const user = await usermodel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // 3. Compare entered password with stored hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // 4. Create JWT token
  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.securekey,
    { expiresIn: '1h' }
  );

  // 5. Send success response
  return res.status(200).json({ message: "Login successful", token, user });
};


    

const userDetails = async (req, res) => {
  // const { id } = req.params;

  try {
    const user = await usermodel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ email: user.email });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


module.exports={userDetails,Login,Signup}


