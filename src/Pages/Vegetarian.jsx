import React, { useEffect } from 'react'
import SearchForm from './SearchForm'
import Home from './Home'

const Vegetarian = () => {
    const [Vegetarian,setVegetarian] = useState([]);

useEffect(()=>{
fetchVegetarian();
    },[]);

const fetchVegetarian = async ()=>{
        const {data} = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
        setVegetarian(data.Vegetarian);
    };

  return (
    <div>
      <SearchForm />
    </div>
  )
}

export default Vegetarian