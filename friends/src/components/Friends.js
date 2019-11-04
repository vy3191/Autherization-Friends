import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllFriends,gettingFriendWithID } from '../actions/Friends';
import Friend from './Friend';
import Load from '../components/Loader';
function Friends(props) {
  
  useEffect( () => {
     props.getAllFriends();
  },[]);

 

 if(props.friends.length === 0) {
    return <Load />
 }
  return (
    <div>
      <h2>My Friends' List</h2>
      { props.fetchingFriends ? <Load /> :
      props.fetchedFriends && props.friends.map( (friend,index) => {
            return  <div onClick={() =>props.gettingFriendWithID(friend) }>
                         <Friend friend={friend} key={index}/>
                     </div>
                    
      })}
    </div>
  )
}
function mapStateToProps(state) {
    return {
       friends: state.friends.friends,
       fetchingFriends: state.friends.fetchingFriends,
       fetchedFriends: state.friends.fetchedFriends,
       updatedFriends:state.friends.updatedFriends
    }
}
const mapDispatchToProps = {
     getAllFriends,
     gettingFriendWithID
}
export default connect(mapStateToProps,
                       mapDispatchToProps)(Friends);
