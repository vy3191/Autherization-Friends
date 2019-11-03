import React from 'react';
import { connect } from 'react-redux';
import { removeFriend } from '../actions/Friends';

function Friend(props) {
  const {id, name, age, email} = props.friend;
  return (
    <div>
      <ul>
        <div style={{textAlign:'right'}}>
          <button onClick={() => props.removeFriend(props.friend)}
            style={
                 {fontSize: "30px", 
                 color: "red", 
                 cursor:'pointer'}
                 }>X</button>
        </div>        
        <li> Id:{id}</li>
        <li> Name: {name}</li>
        <li> Age: {age}</li>
        <li> Email: {email}</li>
      </ul>
    </div>
  )
}
const mapDispatchToProps = {
   removeFriend
}
export default connect(null, mapDispatchToProps)(Friend);