import React from "react";
import logo from "./Images/logo1.jpg";
const Header = () =>{
      return(
        <>
         <div className="header">
            <img src={logo} alt="logo" width="100" height="80" />
            <h1>Keep Notes</h1>
         </div>
        </>
      )
}

export default Header;