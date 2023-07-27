import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <p className='title'>
        <NavLink className='title-link' to='/'>Employee Management.</NavLink>
      </p>
      <button className='add-btn'>
        <NavLink className='link' to='/details'>Add Employee</NavLink>
      </button>
    </div>
  )
}

export default Header