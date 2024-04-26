import React from 'react'
import {  NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='logo'>Logo</div>
        <ul className='menu_wrapper'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contacts'>Contacts</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
            
          
        </ul>
    </header>
  )
}

export default Header