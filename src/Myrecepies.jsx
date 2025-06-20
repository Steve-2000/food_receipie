// In Myrecepies.jsx
import { useEffect ,useState} from "react";
import axios from "axios";

const Myrecepies = () => {
  

 const [allreceipies, setAllreceipies] = useState([]);
 let user = JSON.parse(localStorage.getItem("user"));

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
    const myReceipies = allreceipies.filter((receipe) => receipe.createdBy===user._id);

  return (
    <div>
      <h1 className="text-center mb-4 allreceipies-heading">All Recipes</h1>
      <div className="row">
        {myReceipies.map((receipe) => (
          <div key={receipe._id} className="col-md-2 mb-4">
            <div className="card h-100">
              <img
                // onClick={()=>handlerecepie(receipe)} // Uncomment and define handlerecepie if needed
                src={`http://localhost:5000/data/uploads/${receipe.image}`}
                className="card-img-top receipe-image"
                alt={receipe.title}
              />
              <div className="card-body">
                <h5 className="card-title">{receipe.title}</h5>
                <div className="card-icons">
                  <div>
                    {/* <FaRegClock /> */}
                    <p>{receipe.time}</p>
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
    </div>
  );
};

export default Myrecepies;