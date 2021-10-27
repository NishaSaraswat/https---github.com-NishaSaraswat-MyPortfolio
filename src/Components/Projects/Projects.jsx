import React from 'react'
import Cards from '../Projects/Cards.jsx'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'
import classes from '../../Components/Projects/Projects.module.css'

function Projects() {

  return (
    <>
    <h2>Projects</h2>
    <div className={classes.Cards}>
      <Cards img={project1} title="The Shoe Shop" description = ""/>
      <Cards img={project1} title="A website for dog daycare" description = "Only Html and CSS"/>
      <Cards img={project2} title="The-Cook-Book" description="A web application (API, Ajax, Javascript, HTML & CSS)." />
      <Cards img={project3} title="ToDoList" description="A simpel ToDoList in Javascript" />
      <Cards img={project1} title="" description="An app in Node.JS, Express.JS & MongoDB" />
      <Cards img={project1} title="Movie Search App" description="A simple movie search app using OMBDAPI" />
      <Cards img={project1} title="Photonic" description="A photo chat app built in react, javascript, mongoDB (Mongoosy) and Nodejs" />
      </div>
      </>
  )
}

export default Projects
