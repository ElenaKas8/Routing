import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='logo'>Logo</div>
        <ul className='menu_wrapper'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
            <li><Link to='/products'>Products</Link></li>
          
        </ul>
    </header>
  )
}

export default Header