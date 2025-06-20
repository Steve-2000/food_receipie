// import React from 'react';
import './home.css';
// import axios from 'axios';
import Allreceipies from './Allreceipies';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Loginform from './Loginform';  
// import { Await, useLoaderData } from 'react-router-dom';
import Model from './Model';


const Home = () => {
const [isOpen, SetIsOpen] = useState(false);
  const Navigate = useNavigate();
    let token = localStorage.getItem("token");
 
const handleShare = () => {
  console.log("Share button clicked");  

if (token) {
  Navigate("/addreceipie");
}else{
  console.log("Please login to share your recipes");
  SetIsOpen(true);
}


}
  return (
    <>
      <section className="home-section">
        <div className="home-text">
          <h1>Food Recipes 😊</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
          <button onClick={()=>handleShare()}  className="share-btn">Share your recipes</button>
        </div>
        
  {(isOpen)&& <Model onclose={()=>SetIsOpen(false)}><Loginform SetIsOpen={()=>SetIsOpen(false)}/></Model>  }
        <div className="home-image">
          <img src="./food.png" alt="recipe" />
        </div>
      </section>

    
      <Allreceipies/>
    </>
  );
};

export default Home;
