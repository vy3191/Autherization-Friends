import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateFriend} from '../actions/Friends'
import Load from '../components/Loader';


function FriendEdit(props) { 
  const [newUser, setNewUser]=useState({name:'',age:'',email:''});
  const [editing, setEditing]=useState(false);
  const handleChange = (event) => {
     setNewUser({...newUser, [event.target.name]:event.target.value});
  }
  const handleSubmit = (event) => {
     event.preventDefault();
     alert('working');
     const user = {...newUser, id:props.friend.id};
     console.log('updating user',user)
     props.updateFriend(props, user);
     setNewUser({name:'',age:'',email:''})
     setEditing(!editing);
  }

  if(props.fetchingSingleFriend) {
     return <Load />;
  }
  console.log(props.fetchingSingleFriend)
  console.log(props.fetchedSingleFriend)
  console.log('friend edit- friend',props.friend)
  if(editing) {
     return(
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name="name" value={newUser.name} placeholder={props.friend.name} />
      <input type="text" onChange={handleChange} name="age" value={newUser.age} placeholder={props.friend.age} />
      <input type="text" onChange={handleChange} name="email" value={newUser.email} placeholder={props.friend.email} />
      <button type="submit">Update Friend</button>
    </form>
     )
  }
  return (
    <div className='update-friend'>
      <div style={{textAlign:'right'}}>
       <button onClick={() => setEditing(true)}>Edit</button>
       </div> 
      <p>Name: {props.friend.name}</p>
      <p> Age:{props.friend.age}</p>
      <p>Email:{props.friend.email}</p>
    </div>
  )
}
const mapDispatchToProps = {
  updateFriend
}
function mapStateToProps(state) {
   return  {
      fetchingSingleFriend: state.friends.fetchingSingleFriend,
      fetchedSingleFriend: state.friends.fetchedSingleFriend,
      friend: state.friends.friend
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendEdit);
