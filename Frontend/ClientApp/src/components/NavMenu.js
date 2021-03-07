import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar(){
  return(

      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link text-white ml-5" to={"/selection"}>Home&nbsp;<i class="fas fa-home"></i></Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link text-white ml-5" to={"/contact-info"}>Contact us&nbsp;<i class="fas fa-phone"></i></Link>
              </li>
            
              <li className="nav-item">
                <Link className="nav-link text-white ml-5" to={"/sign-in"}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ml-5" to={"/uploading"}>Uploading</Link>
              </li>

              <li className="nav-item dropdown">
              <button className="btn btn-secondary dropdown-toggle text-white ml-5" 
              type="button" 
              id="dropdownMenuButton1" 
              data-bs-toggle="dropdown" 
              aria-expanded="false">
              SignUp
              </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>  <Link className="dropdown-item"  to={"/sign-in"}>Sign In</Link> </li>
                  <li>  <Link className="dropdown-item"  to={"/sign-in"}>Sign In</Link> </li>

                </ul>
              </li>
              <form className="d-flex ml-5">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
             
            </ul>
          </div>
        </div>
      </nav>
    
  )
}
export default Navbar;



