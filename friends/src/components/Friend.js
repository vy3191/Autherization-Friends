import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
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
        <Link to={`/friends/${props.friend.id}`}>      
          <span>
          <li> Id:{id}</li>
          <li> Name: {name}</li>
          <li> Age: {age}</li>
          <li> Email: {email}</li>
          </span>
        </Link>
      </ul>
    </div>
  )
}
const mapDispatchToProps = {
   removeFriend
}
export default connect(null, mapDispatchToProps)(Friend);