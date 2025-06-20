import { useLocation, useParams } from 'react-router-dom';
// import 'eachrecepie.css'; // Import your CSS file for styling\
import './eachrecepie.css'; // Import your CSS file for styling
import Myrecepies from './Myrecepies';
const Eachreceipe = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const receipe = state?.receipe;

  // Optional: fallback if no state (fetch by id)
  if (!receipe) {
    return <div>Loading or no recipe found for id: {id}</div>;
  }

  return (
    <div className="eachreceipe-container">
      <h2>{receipe.title}</h2>
      <img src={`http://localhost:5000/data/uploads/${receipe.image}`} alt={receipe.title} />
      <p><strong>Description:</strong> {receipe.description}</p>
      <p><strong>Ingredients:</strong> {receipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {receipe.instructions}</p>
      <p><strong>Time:</strong> {receipe.time}</p>
     
    </div>
  );
};

export default Eachreceipe;