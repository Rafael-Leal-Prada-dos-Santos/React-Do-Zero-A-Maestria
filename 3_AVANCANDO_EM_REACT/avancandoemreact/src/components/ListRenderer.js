import React from 'react'

import { useState } from 'react'

const ListRenderer = () => {
    
  const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"])
  const [users, setUsers] = useState([
    {id:1, name: "Matheus", age: 31},
    {id:2, name: "João", age: 28},
    {id:3, name: "Matheus", age: 44}
  ])
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        
        console.log(randomNumber)

        setUsers((prevUsers) => {

            if(prevUsers !== undefined && prevUsers.length > 0)
            {
               return prevUsers.filter((user) => user.id !== randomNumber)
            }
        })
    }

  return (
    <div>
        <ul>
            {list.map(
                (item, i) => (<li key={i}>{item}</li>)
            )}
        </ul>
        <ul>
        {
          users !== undefined && users.length > 0 ? 
            users.map(
                (user) => (<li key={user.id}>{user.name}, {user.age} anos.</li>)
            ): (<div></div>)
          
        }
        </ul>
        <button onClick={deleteRandom}>Delete Random</button>
    </div>
  )
}

export default ListRenderer