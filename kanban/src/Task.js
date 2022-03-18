import React from 'react'
import styles from './assets/css/Task.css'

const Task = ({no,name,done}) => {
  return (
    <li className={styles.TaskList__Task}>
        <input type='checkbox' Checked={done} />
        {name}
        <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  )
}

export default Task