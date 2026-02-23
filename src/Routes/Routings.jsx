import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoryMeals from '../Pages/CategoryMeals';
import MealDetails from '../Pages/MealDetails';
import SearchForm from '../Pages/SearchForm';
import Home from '../Pages/Home';

const Routings = () => {
  return (
<Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/category/:name" element={<CategoryMeals />} />
   <Route path="/meal/:id" element={<MealDetails />} />
   <Route path='/search' element={<SearchForm />}/>
      </Routes>
      );
}

export default Routings;