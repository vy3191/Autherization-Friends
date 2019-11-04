import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Load from '../components/Loader';


function FriendEdit(props) { 
  
  if(props.fetchingSingleFriend) {
     return <Load />;
  }
  console.log(props.fetchedSingleFriend)
  console.log(props.fetchedSingleFriend)
  console.log(props.friend)
  return (
    <div>
      <p>Name: {props.friend.name}</p>
      <p> Age:{props.friend.age}</p>
      <p>Email:{props.friend.email}</p>
    </div>
  )
}
const mapDispatchToProps = {
  
}
function mapStateToProps(state) {
   return  {
      fetchingSingleFriend: state.friends.fetchingSingleFriend,
      fetchedSingleFriend: state.friends.fetchedSingleFriend,
      friend: state.friends.friend
   }
}
export default connect(mapStateToProps, null)(FriendEdit);
