import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Addreceipie.css'; // ✅ Add your CSS file here

const Addreceipie = () => {
  const navigate = useNavigate();
  const [receipie, setReceipie] = useState({});

  const handleValue = (e) => {
 
    let value = e.target.name === "ingredients" ? e.target.value.split(","):e.target.name==="image" ? e.target.files[0] : e.target.value;
    setReceipie({ ...receipie, [e.target.name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      "http://localhost:5000/receipe",
      receipie,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "authorization":'bearer '+ localStorage.getItem("token")
        },
      }
    );
    console.log("Recipe added successfully", res.data);
    navigate("/");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder='Enter receipie title' onChange={handleValue} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="30" rows="10" placeholder='Enter receipie description' onChange={handleValue}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <input type="text" name="ingredients" id="ingredients" placeholder='Enter receipie ingredients' onChange={handleValue} />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Instructions</label>
          <textarea name="instructions" id="instructions" cols="30" rows="10" placeholder='Enter receipie instructions' onChange={handleValue}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" placeholder='Enter receipie image url' onChange={handleValue} />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input type="text" name="time" id="time" placeholder='Enter receipie time' onChange={handleValue} />
        </div>

        <button className="submit-btn" type='submit'>Add Receipie</button>
      </form>
    </>
  );
};

export default Addreceipie;
