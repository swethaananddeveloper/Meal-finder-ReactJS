import React from 'react'
import { Route } from 'react-router-dom'
import CategoryMeals from '../Pages/Category'

const Routings = () => {
  return (
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryMeals />} />
        <Route path="/meal/:id" element={<MealDetail />} />
        <Route path="/search" element={<SearchForm />} />
      </Routes>)
}

export default Routings