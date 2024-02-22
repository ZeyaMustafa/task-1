import React from "react";
import "./Header.css";
import whole from "./whole.png";

function Header() {
  return (
    <div className="d-lg-block d-md-none">

    <div className="container d-none d-lg-flex  align-items-center justify-content-between p-3">

      <a href="/">
        <img 
          src={whole}
          alt="ATG"
          />
      </a>
      
      <div className="search">
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" />
    </form>
      </div>

      <div className="create">

      <div className="d-flex align-items-center gap-1">
     <button className="btn custom-btn-create p-0 m-0" data-bs-toggle = "modal">
      Create Account. 
      <span className="text-primary fw-bold">
        
        It's Free
      </span>
     </button>
      </div>
      </div>

      </div>

    </div>
  
         
    
    )
}

export default Header;
