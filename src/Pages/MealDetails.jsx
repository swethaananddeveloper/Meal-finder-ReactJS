import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMeal();
  }, [id]);

  const fetchMeal = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setMeal(data.meals[0]);
  };

  // 🔥 Get Ingredients + Measures Dynamically
  const getIngredients = () => {
    let items = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        items.push({
          ingredient: meal[`strIngredient${i}`],
          measure: meal[`strMeasure${i}`],
        });
      }
    }
    return items;
  };

  if (!meal)
    return <h4 className="text-center mt-5 pt-5">Loading...</h4>;

  const ingredients = getIngredients();

  // Split measures into 2 columns
  const half = Math.ceil(ingredients.length / 2);
  const leftMeasures = ingredients.slice(0, half);
  const rightMeasures = ingredients.slice(half);

  // Split instructions into steps
  const instructions = meal.strInstructions.split(".");

  return (
    <div className="container mt-5 pt-5">

      {/* Title */}
      <h2 className="mb-4">{meal.strMeal}</h2>

      <div className="row">

        {/* LEFT IMAGE */}
        <div className="col-md-5">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* RIGHT DETAILS */}
        <div className="col-md-7">

          <h4 className="border-bottom pb-2 mb-3 text-warning">
            {meal.strMeal}
          </h4>

          <p>
            <strong>CATEGORY:</strong> {meal.strCategory}
          </p>

          {meal.strSource && (
            <p>
              <strong>Source:</strong>{" "}
              <a href={meal.strSource} target="_blank" rel="noreferrer">
                {meal.strSource}
              </a>
            </p>
          )}

          {meal.strTags && (
            <p>
              <strong>Tags:</strong>{" "}
              <span className="badge bg-warning text-dark">
                {meal.strTags}
              </span>
            </p>
          )}

          {/* ORANGE INGREDIENT BOX */}
          <div
            className="p-4 mt-4"
            style={{
              backgroundColor: "#f4511e",
              color: "white",
              borderRadius: "6px",
            }}
          >
            <h5 className="mb-3">Ingredients</h5>

            <div className="row">
              {ingredients.map((item, index) => (
                <div className="col-6 mb-2" key={index}>
                  <span className="badge bg-info me-2">
                    {index + 1}
                  </span>
                  {item.ingredient}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MEASURE SECTION */}
      <div className="mt-5">
        <h5>Measure:</h5>

        <div className="row border p-3 bg-light">
          <div className="col-md-6">
            {leftMeasures.map((item, index) => (
              <p key={index}>🔸 {item.measure}</p>
            ))}
          </div>

          <div className="col-md-6">
            {rightMeasures.map((item, index) => (
              <p key={index}>🔸 {item.measure}</p>
            ))}
          </div>
        </div>
      </div>

      {/* INSTRUCTIONS */}
      <div className="mt-5">
        <h5>Instructions:</h5>

        {instructions.map(
          (step, index) =>
            step.trim() && (
              <div key={index} className="mb-2">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  readOnly
                />
                {step.trim()}.
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MealDetails;