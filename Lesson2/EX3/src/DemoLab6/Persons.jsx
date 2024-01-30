// Build a component called “Persons”. The “Persons” Component will
// have a list of other component called “Person”. Each “Person”
// component will present the persons’s name and a list of “Task”
// components represents his tasks. Each “Task” component will present
// it’s title and completed status (true/false)

import React, { useState } from 'react'
import Person from './Person'

export default function Persons() {
  const [users, setUser] = useState([
    { name: "Avi", task: [{ title: "Task A", Completed: true }, { title: "Task B", Completed: false }] },
    { name: "Dana", task: [{ title: "Task C", Completed: false }, { title: "Task D", Completed: true }] },

  ])
  return (
    <div style={{border: '4px solid green', textAlign:'left'}}>
      <h1>Person List</h1>

      {
        users.map((user) => {
          return <Person userData={user} />
        })
      }


    </div>
  )
}

