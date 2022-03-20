import React, { Fragment, useState } from 'react'
import styles from './assets/css/Card.css'
import TaskList from './TaskList.js'
const Card = ({title,description,tasks}) => {
  const [showDetails, setShowDetails] = useState(false);

  const onClickArrow = function(e){
    setShowDetails(!showDetails)
  }
  return (
    
        <div className={styles.Card}>
            {showDetails == true ?
            <Fragment>
            <div className={styles.Card__Title__open}
            onClick={onClickArrow}
            >{title}</div>
            
            <div className='Card__Details'>{description}</div>
            <TaskList 
            task1={tasks}
            />
            </Fragment>
            :
            <Fragment>
            <div className={styles.Card__Title}
            onClick={onClickArrow}>
              
              {title}
            </div>
            
            </Fragment>
          }
        </div>
   
    
  )
}

export default Card