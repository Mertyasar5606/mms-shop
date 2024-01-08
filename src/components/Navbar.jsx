import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";



function Navbar() {
const {shop,setshop}= useContext(LoginContext)
  
return (
    <div>
      <nav className='navbar'>
        <img src="" alt="" />

<ul>
  <li className='nav-item active'  >
    <Link to="/" className='nav-link'>
    Home
    </Link>
  </li>
  <li className='nav-item'  >
    <Link to="/about" className='nav-link'>
    About
    </Link>
  </li>
  <li className='nav-item' >
    <Link to="/shop" className='nav-link'>
    Shop
    </Link>
  </li>
  <li className='nav-item' >
    <Link to="/contact" className='nav-link'>
    Contact
    </Link>
  </li>
  </ul>

<div className='font-bold text-[25px]  mr-[2rem]'>
  {shop.email && shop.password ? (
  <div className='flex '> 
    <Link 
    className='nav-link'
    to={"/login"}
    onClick={()=>setshop({email:"",password:""})}>Logout<IoIosLogOut /> 
    </Link>
    </div>
  ):(
    <Link className='nav-link' to={"/login"}>
      login<CiLogin/>
    </Link>
   
  )}
  </div>


  
   




    </nav>


    </div>
  )
}

export default Navbar
