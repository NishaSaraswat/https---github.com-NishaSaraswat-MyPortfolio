import React from 'react'
import Navigation from './Navigation'
import NavBarMobile from './NavBarMobile'
import classes from '../Header/NavBar.module.css'


function NavBar() {
  return (
    <div className={classes.NavBar}>
       <Navigation/>
      <NavBarMobile />
    </div>
  )
}

export default NavBar
