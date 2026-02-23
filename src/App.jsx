import { Routes } from 'react-router-dom'
import './App.css'
import Header from './CompClass.jsx/Header'
import Home from './Pages/Home'
import SearchForm from './Pages/SearchForm'
import CategoryMeals from './Pages/CategoryMeals'

function App() {

  return (
   <>
   <Header />
<Home />
<SearchForm />
<CategoryMeals />
<Routes />
   </>
  )
}

export default App
