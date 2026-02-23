import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav 
      className="navbar fixed-top navbar-dark"
      style={{ backgroundColor: "#f4511e" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white fw-bold">
          MEAL FINDER
        </Link>

        <button 
          className="navbar-toggler border-0"
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div 
          className="offcanvas offcanvas-end" 
          tabIndex="-1" 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
              MEAL FINDER
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-black">

              <li className="nav-item text-start">
                <Link to="/" className="nav-link text-dark">Home</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Beef" className="nav-link text-dark">Beef</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Chicken" className="nav-link text-dark">Chicken</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Dessert" className="nav-link text-dark">Dessert</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Lamb" className="nav-link text-dark">Lamb</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Miscellaneous" className="nav-link text-dark">Miscellaneous</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Pasta" className="nav-link text-dark">Pasta</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Pork" className="nav-link text-dark">Pork</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Seafood" className="nav-link text-dark">Seafood</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Side" className="nav-link text-dark">Side</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Starter" className="nav-link text-dark">Starter</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Vegan" className="nav-link text-dark">Vegan</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Vegetarian" className="nav-link text-dark">Vegetarian</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Breakfast" className="nav-link text-dark">Breakfast</Link>
                <hr className="nav m-1"/>
              </li>

              <li className="nav-item text-start">
                <Link to="/Category/Goat" className="nav-link text-dark">Goat</Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header