import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const[menu,setMenu]=useState("Home");

  const{getTotalCartAmount,token,setToken}=useContext(StoreContext);

  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className="logo"/></Link> 
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")}  className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")}  className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#Reservation' onClick={()=>setMenu("Reservation")}  className={menu==="Reservation"?"active":""}>Reservation</a>
        <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-rigth">
        <img src={assets.search_icon} alt="" /> 
        <div className="navebar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr/>
            <li><img src={assets.logout_icon} alt="" /><p>LogOut</p></li>
          </ul>
          </div>}
        
      </div>
    </div> 
  )
}

export default Navbar 