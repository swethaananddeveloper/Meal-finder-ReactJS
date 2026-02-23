import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CategoryMeals = () => {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
fetchMeals();
    },[name]);

    const fetchMeals = async()=>{
        const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
    setMeals(data.meals);
    };
 return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">{name} Meals</h3>

      <div className="row">
        {meals?.map((meal) => (
          <div className="col-md-3 mb-4" key={meal.idMeal}>
            <Link to={`/meal/${meal.idMeal}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMeals;