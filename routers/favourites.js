const express = require('express');
const verifytoken = require('../middleware/auth');
const Favmode = require('../model/Favmode'); // Assuming you have a model for favorites
const router = express.Router();
router.post('/', verifytoken, (req, res) => {
    const { receipeId, userId } = req.body;
    if (!receipeId || !userId) {
        return res.status(400).json({ message: "Please provide receipeId and userId" });
    }
  
    const fav=Favmode.create({
        receipeId,
        userId
    }).then((fav) => {
        console.log("Recipe added to favourites:", fav);
          res.status(200).json({ message: "Recipe added to favourites" });
    }).catch((err) => {
        console.error("Error adding recipe to favourites:", err);
        res.status(500).json({ message: "Internal server error" });
    });
});
router.get('/', verifytoken, (req, res) => {
    const userId = req.user.id; // Get userId from the token
    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }
    Favmode.find({ userId })
        .then(favorites => {
            console.log("Favorites fetched successfully:", favorites);
            res.status(200).json(favorites);
        })
        .catch(err => {
            console.error("Error fetching favorites:", err);
            res.status(500).json({ message: "Internal server error" });
        });
});

             
module.exports = router;