import React from 'react'

export default function Task(props) { //key = userTask
  return (
    <div style={{border: '4px solid red'}}>
       Title: {props.userTask.title}<br/>
       Completed: {props.userTask.Completed.toString()}
        
    </div>
  )
}
