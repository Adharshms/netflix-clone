import React from 'react'
import "./Navbar.css"
import logo from '../../assets/netflix_react_assets/assets/logo.png'; // adjust path


 export const Navbar = () => {
  return (
    <div className="Navbar">
        
       <div className="nav-left">
        <img src={logo} alt="" />
        <ul>
        <li>Home</li>
        <li>TV show</li>
        <li>Movies</li>
        <li>new & popular</li>
        <li>my list</li>
        <li>Browser by language</li>
        </ul>
       </div>
       <div className="nav-right">
        </div>
         </div>
  )
}
export default Navbar