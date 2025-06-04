import React from 'react'
import Mainnav from './Mainnav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const NavFooter = () => {
  return (
    <div>
        <Mainnav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default NavFooter