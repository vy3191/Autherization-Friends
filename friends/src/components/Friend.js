import React from 'react'

function Friend(props) {
  const {id, name, age, email} = props.friend;
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{age}</li>
        <li>{email}</li>
      </ul>
    </div>
  )
}

export default Friend
