import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor: "#black"}}>
    <Link to="/" >
      <img width="80px" src='house.png' alt='' />
    </Link>
    </div>
  )
}

export default Navbar