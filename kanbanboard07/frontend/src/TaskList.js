import React from 'react'

import Task from './Task'

const TaskList = ({task1}) => {
  console.log(task1)
  return (
    <div className='TaskList'>
        {task1.map((e) => < Task
                          key={e.no}
                          name = {e.name}
                          done = {e.done}
                          />)}
    </div>
  )
}

export default TaskList