import { CallMissedSharp } from '@material-ui/icons'
import React from 'react'
import MenuList from './MenuList'
import classes from '../Header/NavBar.module.css'


function Navigation() {
  return (
    <nav className={classes.Navigation}>
      <MenuList/>
    </nav>
  )
}

export default Navigation
