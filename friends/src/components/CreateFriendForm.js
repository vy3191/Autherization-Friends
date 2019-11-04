import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addFriends} from '../actions/Friends';

function CreateFriendForm(props) {
  const defaultNewUser = { name: '',  age: '', email: '' }
  const [newUser, setNewUser] = useState(defaultNewUser);
  const handleChange = (event) => {
      setNewUser({...newUser, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {    
     event.preventDefault();
     if(!newUser.name && !newUser.age && !newUser.email) return;
    //  console.log('new user', newUser);
     props.addFriends(newUser);
     setNewUser(defaultNewUser);
     props.history.push("/friends");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="name" value={newUser.name} placeholder="name" />
        <input type="text" onChange={handleChange} name="age" value={newUser.age} placeholder="age" />
        <input type="text" onChange={handleChange} name="email" value={newUser.email} placeholder="email" />
        <button type="submit">Add New Friend</button>
      </form>
    </div>
  )
}
const mapDispatchToProps = {
  addFriends
}
export default connect(null, mapDispatchToProps)(CreateFriendForm);
