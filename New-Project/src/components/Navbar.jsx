import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
  <div className="logo"><h1>GILMAN</h1></div>
  <div className="center-nav">
    <h4>HOME</h4>
    <h4>ABOUT</h4>
    <h4>CONTACT US</h4>
    <h4>BLOG</h4>
  </div>
  <div className="right-nav">
    <h3>LOGIN</h3>
  </div>
    </div>
  )
}

export default Navbar
