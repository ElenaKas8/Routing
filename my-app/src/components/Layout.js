import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>

        <div>
            <Header />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout