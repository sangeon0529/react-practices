import React, { useState } from 'react'
import styles from './assets/css/Task.css'

const Task = ({no,name,done}) => {
  const [rdone,setRdone] = useState(done)
  const onChangeDone = e => {
     const state = e.target.value == 'false' ? true : false
    setRdone(state)
  }
  return (
    <li className={styles.TaskList__Task}>
        <input type='checkbox' 
        value={rdone}
        checked={rdone == true}
        onChange={onChangeDone} 
        />
        {name}
        <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  )
}

export default Task