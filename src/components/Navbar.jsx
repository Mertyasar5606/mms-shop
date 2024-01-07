import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'




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

  {shop.email && shop.password ? (
    <Link 
    className='nav-link'
    to={"/login"}
    onClick={()=>setshop({email:"",password:""})}>Logout
    </Link>

  ):(
    <Link className='nav-link' to={"/login"}>
      login
    </Link>
  )}


  
   




    </nav>


    </div>
  )
}

export default Navbar
