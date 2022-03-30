import React , {useRef} from 'react'
import styles from './assets/css/TaskList.css'
import Task from './Task'

const TaskList = ({task1,callback,no}) => {
  const refForm = useRef()
  
  return (
    <div className='TaskList'>
        {task1.map((e) => < Task
                          key={e.no}
                          no={e.no}
                          name = {e.name}
                          done = {e.done}
                          card_no = {e.card_no}
                          callback = {[callback[1],callback[2]]}
                          />)}
        <input 
          type='text' 
          ref={refForm}
          className={styles.TaskList__add_Task}
          placeholder={'테스크 추가'}
          onKeyPress={e => {
            if(e.key === 'Enter'){
              try {
              if(e.target.value == ''){
                throw new Error(`${e.target.placeholder}가 비어 있습니다. `);
              }
              const addTask = new Object();
              addTask.name = e.target.value
              addTask.card_no = no
              callback[0](addTask)
            }catch(err) {
              console.log(err.message);
            }

          }
          }}
          />
    </div>
  )
}

export default TaskList