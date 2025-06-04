const Receipes = require('../model/receipemode');

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
    const { title, description, ingredients, instructions, image } = req.body;

    if (!title || !description || !ingredients) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newreceipe = await Receipes.create({
      title,
      description,
      ingredients,
      instructions,
      image,
    });

    return res.status(201).json(newreceipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const updatereceipe = async(req, res) => {
    const{ title, description, ingredients, instructions, image } = req.body;
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
  deletereceipe
};
  