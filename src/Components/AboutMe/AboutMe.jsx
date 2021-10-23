import React from 'react'
import classes from '../AboutMe/About.module.css'
import profile from '../../images/profile.png'

function AboutMe() {
  return (
    <>
      <div className={classes.About}>
      <h4> About Me </h4>
        <img src={profile} alt="profile" />
        <div className={classes.AboutMe}>
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        </div>
      </div>
    </>
  )
}

export default AboutMe
