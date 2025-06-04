import React from 'react';
import './home.css';
// import axios from 'axios';
import Allreceipies from './Allreceipies';
// import { Await, useLoaderData } from 'react-router-dom';



const Home = () => {


  return (
    <>
      <section className="home-section">
        <div className="home-text">
          <h1>Food Recipes 😊</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
          <button className="share-btn">Share your recipes</button>
        </div>

        <div className="home-image">
          <img src="./food.png" alt="recipe" />
        </div>
      </section>

      <div className="wave-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fillOpacity="0.23"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,160C672,171,768,213,864,245.3C960,277,1056,299,1152,266.7C1248,235,1344,149,1392,106.7L1440,64L1440,320L1392,320..."
          />
        </svg>
      </div>
      <Allreceipies/>
    </>
  );
};

export default Home;
