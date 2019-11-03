import React from 'react'

function Friend(props) {
  const {id, name, age, email} = props.friend;
  return (
    <div>
      <ul>
        <li> Id:{id}</li>
        <li> Name: {name}</li>
        <li> Age: {age}</li>
        <li> Email: {email}</li>
      </ul>
    </div>
  )
}

export default Friend
