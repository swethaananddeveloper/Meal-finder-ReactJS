import React, { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [foodName, setFoodName] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );

    setResults(data.meals);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 me-2"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button className="btn btn-warning">Search</button>
      </form>
 <h2>What are your favorite cuisines?</h2>
       <p>PERSONALIZE YOUR EXPERIENCE</p>
   
      <div className="row">
        {results?.map((meal) => (
          <div className="col-md-3 mb-4" key={meal.idMeal}>
            <div className="card">
              <img
                src={meal.strMealThumb}
                className="card-img-top"
                alt={meal.strMeal}
              />
              <div className="card-body text-center">
                <h6>{meal.strMeal}</h6>
              </div>
            </div>
          </div>
        ))}
   
         
      </div>
       
    </div>
  );
};

export default SearchForm;