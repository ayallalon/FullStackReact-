import React , { useState }  from 'react'
import Child from './Child';

export default function Parent() {

    const[userData, setUserData] = useState([
        {name: "Avi", age:23, city: "TLV", isAdult: true},
        {name: "Dana", age:42, city: "Haifa", isAdult: false}
    ]);

const addUser =  (data)=>{
    setUserData([...users, data]);

}
  return (
    <div style={{background:'yellow'}}>
     <h1>Parent Component</h1>

     <ul>
        {
           userData.map((user, index) =>{
            return <li key={index}>{user.name} is {user.age} years old, livies in {user.city} she/he {user.isAdult? "an isAdult": "not an Adult"} </li>
           }) 
        }
     </ul>

     <Child callback = {addUser}/>
    </div>
  )
}
