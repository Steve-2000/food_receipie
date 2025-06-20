import axios from "axios";
import { useEffect, useState } from "react";
// import foodRecipe from "./assets/food.png";
import "./allreceipe.css";
import { FaRegClock } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Navigate, useNavigate } from "react-router-dom";
import Myrecepies from "./Myrecepies";


const Allreceipies = () => {
  const Navigate = useNavigate();

  const [allreceipies, setAllreceipies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/receipe")
      .then((response) => {
        setAllreceipies(response.data);

      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  const handleFav = (receipe) => {
    console.log("Favorite icon clicked"); 
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");
    if (!user) {
      console.log("Please login to favorite recipes");
      Navigate("/login");
      return;
    } else {
      console.log("User is logged in:", user.name);
      axios.post(
        "http://localhost:5000/favorites",
        {
          receipeId: receipe._id,
          userId: user._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // Ensure your user object has a 'token' property
          }
        }
      )
      .then((res) => {
        console.log("Favorite added:", res.data);
      })
      .catch((err) => {
        console.error("Error adding favorite:", err);
      });
      console.log(receipe._id, user._id);
    }
    // Here you can implement the logic to favorite the recipe
    console

    console.log("Recipe to favorite:", receipe);

  };

  const handlerecepie = (receipe) => {
    console.log("Selected receipe:", receipe);
    Navigate(`/receipie/${receipe._id}`, { state: { receipe } });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 allreceipies-heading">All Recipes</h1>

      <div className="row">
  
        {allreceipies.map((receipe) => (  
          <div key={receipe._id} className="col-md-2 mb-4">
            <div className="card h-100">
              <img
              onClick={()=>handlerecepie(receipe)}
                src={`http://localhost:5000/data/uploads/${receipe.image}`}
                className="card-img-top receipe-image"
                alt={receipe.title}
              />
              <div className="card-body">
                <h5 className="card-title">{receipe.title}</h5>

                <div className="card-icons">
                  <div>
                    <FaRegClock />
                    <p>{receipe.time}</p>
                  </div>
                  <div onClick={()=>handleFav(receipe)}>
                    <CiHeart />
                  </div>
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
