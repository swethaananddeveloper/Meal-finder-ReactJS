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

  if (!meal) return <h4 className="mt-5 pt-5 text-center">Loading...</h4>;

  return (
    <div className="container mt-5 pt-5">
      <h2>{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="img-fluid my-4"
      />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetails;