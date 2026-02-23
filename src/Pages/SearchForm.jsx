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
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search recipes..."
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button className="btn btn-warning">Search</button>
      </form>

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