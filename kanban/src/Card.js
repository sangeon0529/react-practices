import React, { Fragment } from 'react'
import styles from './assets/css/Card.css'
import TaskList from './TaskList.js'
const Card = ({title,description,tasks}) => {
  console.log(title)
  return (
    
        <div className={styles.Card}>
            <div className={styles.Card__Title}>{title}</div>
            <div className='Card__Details'>{description}</div>
            <TaskList 
            task1={tasks}
            />
        </div>
   
    
  )
}

export default Card