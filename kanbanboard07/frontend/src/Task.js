import { object } from 'prop-types'
import React, { useState } from 'react'
import styles from './assets/css/Task.css'

const Task = ({no,name,done,card_no,callback}) => {
  e => {  const vo = new object()
    vo.no = no
    vo.name = name
    vo.done = done
    vo.card_no = card_no}
  
  return (
    <li className={styles.TaskList__Task}>
        <input type='checkbox' 
        
        checked={done === 'Y'}
        onClick={e => {callback[1](vo)}} 
        />
        {name}
        <a href='#' className={styles.TaskList__Task__remove}
        onClick={e=> {callback[0](no)}}
        ></a>
    </li>
  )
}

export default Task
