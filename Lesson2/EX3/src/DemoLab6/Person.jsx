import React from 'react'
import Task from './Task'

export default function Person(props) { //key=userData
  return (
    <div style={{border:'4px solid blue', width: '80%', textAlign:'left'}}>
      <h3>{props.userData.name}</h3>
      <h3>Tasks:</h3>

      {
        props.userData.task.map((task) => {
          return <Task  userTask={task} />
        })
      }
    </div>
  )
}
