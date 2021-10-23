import React from 'react'
import profilePic from "../../images/profilepic.png"
import Button from '@material-ui/core/Button'
import '../../App.css'


function Home() {
  return (
    <div>
      <header className="App-header">
        <p>Hi,<br></br>
          I'am <span style={{ color: "#0BDFDF" }}>Nisha</span>
          <br></br>
            <span style={{ color: "#B5F4BC"}}>Frontend Developer</span>
        </p>
        <img src={profilePic} alt="profile picture"></img>
        <Button variant="outlined" color="inherit"
          className="knowmore"
          style = {
            {
              backgroundColor: "rgba(58,58,58)",
              color: "#B5F4BC"
            }
          }
        >
          Contact</Button>
      </header>     
    </div>
  )
}

export default Home
