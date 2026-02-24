import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ ADD THIS
import { BiColor } from "react-icons/bi";

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
    <div className="container-fluid mt-5 py-5" 
    style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "20vh",
      }}
    >
           <div className="container p-4 rounded shadow"> 
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center mb-4"
      >
        <input
          type="text"
          className="form-control w-50 me-2"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button className="btn btn-warning">Search</button>
      </form>

      <h2 className="text-white">What are your favorite cuisines?</h2>
      <p className="text-white">PERSONALIZE YOUR EXPERIENCE</p>

      <div className="row">
        {results?.map((meal) => (
          <div className="col-md-3 mb-4" key={meal.idMeal}>
            
            <Link
              to={`/meal/${meal.idMeal}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={meal.strMealThumb}
                  className="card-img-top"
                  alt={meal.strMeal}
                />
                <div className="card-body text-center">
                  <h6>{meal.strMeal}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SearchForm;