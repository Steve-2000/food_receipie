const Receipes = require('../model/receipemode');

// const multer = require('multer');
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/data/uploads') // Specify the directory where you want to store the uploaded files
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + file.fieldname
    cb(null,  + '-' + filename)
  }
})

const upload = multer({ storage: storage })


const getreceipes = async(req, res) => {
    try{

        const receipes= await  Receipes.find();
   
            return res.status(200).json(receipes);
     


    } catch(error){
        console.error(error);
        return res.status(500).json({ message: "Server error" });   

    }
  
};

const getreceipe = async(req, res) => {
 
    const receipe= await Receipes.findById(req.params.id);
    res.json(receipe)

};

const addreceipe = async (req, res) => {
  try {
    console.log(req.user)
    const { title, description, ingredients, instructions, image, time} = req.body;

    if (!title || !description || !ingredients) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newreceipe = await Receipes.create({
      title,
      description,
      ingredients,
      instructions,
      image:req.file.filename,
      time,
      createdBy:req.user.id // Assuming req.user is set by your authentication middleware
    });

    return res.status(201).json(newreceipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const updatereceipe = async(req, res) => {
    const{ title, description, ingredients, instructions, image ,time} = req.body;
    const receipe= await Receipes.findById(req.params.id);
    if(receipe){
        try{
            await Receipes.findByIdAndUpdate(req.params.id,req.body,{new:true});
            return res.json(title, description, ingredients, instructions, image);

        }catch(error){
            console.error(error);
            return res.status(500).json({ message: "Server error" });
      }
    };
};

const deletereceipe = async(req, res) => {
  const{id}=req.params;

    await Receipes.findByIdAndDelete(id);
    
      console.log("receipe deleted successfully");
      return res.status(200).json({ message: "Receipe deleted successfully" });
    
}

module.exports = {
  getreceipes,
  getreceipe,
  addreceipe,
  updatereceipe,
  deletereceipe,
  upload
};
  