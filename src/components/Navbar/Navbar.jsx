import React, { Profiler } from 'react'
import "./Navbar.css"
import logo from '../../assets/netflix_react_assets/assets/logo.png'; // adjust path
import search_icon from '../../assets/netflix_react_assets/assets/search_icon.svg'; // adjust path
import bell_icon from '../../assets/netflix_react_assets/assets/bell_icon.svg'; // adjust path
import Profile_img from '../../assets/netflix_react_assets/assets/Profile_img.png';
import caret_icon from '../../assets/netflix_react_assets/assets/caret_icon.svg';


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
        <img src={search_icon} alt="" />
         <p>children</p>
         <img src={bell_icon} alt="" />
         <div className="navbar-profile">
             <img src={Profile_img} alt="" className='profile'/>
              <img src={caret_icon} alt="" />
              <div className="dropdown">
              <p>account</p>
              <p>log out</p> 
              </div>
         </div>
        </div>
         </div>
  )
}
export default Navbar