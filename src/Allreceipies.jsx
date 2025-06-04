import axios from 'axios';
import { useEffect, useState } from 'react';
import foodRecipe from './assets/food.png';
import './allreceipe.css';
import { FaRegClock } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";



const Allreceipies = () => {

  const [allreceipies, setAllreceipies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/receipe')
      .then((response) => {
        setAllreceipies(response.data);
        console.log("Fetched recipes:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

 
  


  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 allreceipies-heading">All Recipes</h1>

      <div className="row">
        {allreceipies.map((receipe) => (
          <div key={receipe._id} className="col-md-2 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={foodRecipe} className="card-img-top receipe-image" alt={receipe.title} />
              <div className="card-body">
                <h5 className="card-title">{receipe.title}</h5>
                {/* <p className="card-text">{receipe.description}</p>
                <p><strong>Ingredients:</strong> {receipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> {receipe.instructions}</p> */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px' }}>
        
            <div  style={{display:'flex', alignItems: 'center', justifyContent: 'center' ,gap:'10px'}}> 
              <div><FaRegClock /></div>
            <p>30 min </p>
            </div>

           
            <CiHeart />
          </div>
                 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allreceipies;
