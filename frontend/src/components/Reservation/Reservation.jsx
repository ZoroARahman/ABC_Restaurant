import React from 'react'
import './Reservation.css' 
// import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import{useNavigate} from 'react-router-dom'

const Reservation = () => {
    const[firstName,setFirstName]=useState("");
    const[lastName,setlastName]=useState("");
    const[email,setEmail]=useState("");
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const[phone,setPhone]=useState(0);
    const navigate=useNavigate();

    const handleReservation=async(e)=>{
        e.preventDefault();
        try {
            const{date} = await axios.post("")
        } catch (error) { /* empty */ }

    };


  return <section className='reservation' id='reservation'> </section>
  
}

export default Reservation