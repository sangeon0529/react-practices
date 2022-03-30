import React, { Fragment, useEffect, useState } from 'react'
import styles from './assets/css/Card.css'
import TaskList from './TaskList.js'
const Card = ({no,title,description}) => {
  const [tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);



  const onClickArrow = async function(e){
      try {  
        const response = await fetch(`/api/task/${no}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: null
        });
  
        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
  
        const json = await response.json();
  
        if(json.result !== 'success') {
          throw new Error(`${json.result} ${json.message}`);
        }
        
        // console.log(json.data)
        setTasks(json.data);
      } catch(err) {
        console.log(err);      
    }
    setShowDetails(!showDetails)
  }

  const notifyAddTask = async (e)=>{
    try {  
      const response = await fetch(`/api/task/add/${e.card_no}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(e)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      
      const response1 = await fetch(`/api/task/${no}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response1.ok) {
        throw new Error(`${response1.status} ${response1.statusText}`);
      }

      const json1 = await response1.json();

      if(json1.result !== 'success') {
        throw new Error(`${json1.result} ${json1.message}`);
      }

      setTasks(json1.data)
    } catch(err) {
      console.log(err);      
    }     
  }
  
  const deleteTask = async (e) => {
    try {  
        const response = await fetch(`/api/delete/${e}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: null
        });
  
        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
  
        const json = await response.json();
  
        if(json.result !== 'success') {
          throw new Error(`${json.result} ${json.message}`);
        }
        

        const response1 = await fetch(`/api/task/${no}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: null
        });
  
        if(!response1.ok) {
          throw new Error(`${response1.status} ${response1.statusText}`);
        }
  
        const json1 = await response1.json();
  
        if(json1.result !== 'success') {
          throw new Error(`${json1.result} ${json1.message}`);
        }
  
        setTasks(json1.data)
      } catch(err) {
        console.log(err);      
    }
  }

  const updateTask = async (e) =>{
    console.log(e)
    // try {  
    //   const response = await fetch(`/api/task/update`, {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(e)
    //   });

    //   if(!response.ok) {
    //     throw new Error(`${response.status} ${response.statusText}`);
    //   }

    //   const json = await response.json();

    //   if(json.result !== 'success') {
    //     throw new Error(`${json.result} ${json.message}`);
    //   }
    // }catch(err) {
    //     console.log(err);      
    //   }     
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
              no={no}
              callback = {[notifyAddTask,deleteTask,updateTask]}
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