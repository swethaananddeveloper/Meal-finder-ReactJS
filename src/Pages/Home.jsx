import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [categories,SetCategories] = useState([]);

    useEffect(()=>{

    },[]);

    const fetchCategories = async ()=>{
        const {data} = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
        SetCategories(data.categories);
    };
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">CATEGORIES</h3>

      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-3 mb-4" key={cat.idCategory}>
            <Link to={`/category/${cat.strCategory}`}>
              <div className="card">
                <img
                  src={cat.strCategoryThumb}
                  className="card-img-top"
                  alt={cat.strCategory}
                />
                <div className="card-body text-center">
                  <h6>{cat.strCategory}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home