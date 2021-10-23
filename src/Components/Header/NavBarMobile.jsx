import React, {useState} from 'react'
import classes from '../Header/NavBar.module.css'
import { CgMenu } from 'react-icons/cg'
import { VscChromeClose } from 'react-icons/vsc'
import MenuList from './MenuList'


function NavBar() {
  const [menuOpen, setMenu] = useState(false);
  const hamburgerOpen = <CgMenu className={classes.Hamburger}
        size="35px" color="#0BDFDF"
        onClick={()=>{setMenu(!menuOpen)}}
  />
  
  const hamburgerClose = <VscChromeClose className={classes.Hamburger}
        size="35px" color="#0BDFDF"
        onClick={()=>{setMenu(!menuOpen) }}
        />
  return (
    
    <div className={classes.Header}>
      <div className={classes.NavBar}>
        {
          menuOpen ? hamburgerClose : hamburgerOpen
        }
        {menuOpen && <MenuList />}
        
      </div>
    </div>
  )
}

export default NavBar
