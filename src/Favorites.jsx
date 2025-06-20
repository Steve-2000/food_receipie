import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [receipe, setReceipe] = useState([]);
    
  
    useEffect(() => {
      const fetchFavorites = async () => { 
        const user1 = JSON.parse(localStorage.getItem("user"));
        let token = localStorage.getItem("token");
        if (!user1) {
          console.error("No user found. Please login.");
          return;

        }
        if (!token) {
          console.error("No user token found. Please login.");
          return;
        }
        try {
          const res = await axios.get('http://localhost:5000/favorites', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log("Favorites fetched successfully:", res.data);
          setReceipe(res.data);
        }
        catch(err){
            console.error("Error fetching favorites:", err);
        }
      }
      fetchFavorites();
    }, []);

useEffect(() => {
  const fetchReceipes = async () => {
   
  try {
    const response = await axios.get('http://localhost:5000/receipe');
    console.log("All recipes fetched successfully:", response.data);
    const allReceipes = response.data;
    const favoriteReceipes = allReceipes.filter((receipe) =>
      favorites.map((fav) => fav.receipeId === receipe._id)
    );
    setFavorites(favoriteReceipes);
    console.log("Filtered favorite recipes:", favorites);
  } catch (err) {
    console.error("Error fetching recipes:", err);
  }
  }
  fetchReceipes();
}, [])
  


      return (
        <div className="row">
          {favorites.map((fav) => (
            <div key={fav._id} className="col-md-2 mb-4">
              <div className="card h-100">
                <img
                  src={`http://localhost:5000/data/uploads/${fav.image}`}
                  className="card-img-top receipe-image"
                  alt={fav.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{fav.title}</h5>
                  <div className="card-icons">
                    <div>
                      <p>{fav.time}</p>
                      <p>{fav.receipeId}</p>
                      <p>{fav.ingredients}</p>
            
                    </div>
                    <div>
                      {/* <CiHeart /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
export default Favorites