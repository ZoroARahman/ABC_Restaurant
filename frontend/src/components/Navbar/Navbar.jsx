import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const[menu,setMenu]=useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo"/>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")}  className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")}  className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#Reservation' onClick={()=>setMenu("Reservation")}  className={menu==="Reservation"?"active":""}>Reservation</a>
        <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-rigth">
        <img src={assets.search_icon} alt="" /> 
        <div className="navebar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div> 
  )
}

export default Navbar 