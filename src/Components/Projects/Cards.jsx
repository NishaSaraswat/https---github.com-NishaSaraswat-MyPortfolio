import React from 'react'
import classes from '../../Components/Projects/Projects.module.css'

function Cards(props) {
  return (
   <div className={classes.Projects}>
          <div className={classes.flipCard}>
              <div className={classes.flipCardInner}>
              <div className={classes.flipCardFront}>
                <img src={props.img} alt="project" style={{ width: 250, height: 265}}/>
              </div>
            <div className={classes.flipCardBack}>
            <p>{props.title}
              <br></br>
              <span>{props.description}</span></p>
                
                    <button>See Live</button>
                    <button>Github</button>
              </div>
              </div>
          </div>

    </div>
  )
}

export default Cards
