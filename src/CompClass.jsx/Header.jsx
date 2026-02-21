import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <nav className="navbar fixed-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">MEAL FINDER</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title " id="offcanvasNavbarLabel">MEAL FINDER</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body ">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
          <li className="nav-item text-start">
            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Beef</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Chicken</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Dessert</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Lamb</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Miscellaneous</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Pasta</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Pork</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Seafood</Link>
                     <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Side</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Starter</Link>
                      <hr className="nav m-1"/>

          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Vegan</Link>
         <hr className="nav m-1"/>
          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Vegetarian</Link>
           <hr className="nav m-1"/>
          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Breakfast</Link>
            <hr className="nav m-1"/>
          </li>
          <li className="nav-item text-start">
            <Link to="#" className="nav-link" >Goat</Link>
          </li>
 </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Header