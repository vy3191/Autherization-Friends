import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
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
            return <Link to={`/friends/${friend.id}`}>
                       <div onClick={() =>props.gettingFriendWithID(friend) }>
                         <Friend friend={friend} key={index}/>
                       </div>
                    </Link>
      })}
    </div>
  )
}
function mapStateToProps(state) {
    return {
       friends: state.friends.friends,
       fetchingFriends: state.friends.fetchingFriends,
       fetchedFriends: state.friends.fetchedFriends
    }
}
const mapDispatchToProps = {
     getAllFriends,
     gettingFriendWithID
}
export default connect(mapStateToProps,
                       mapDispatchToProps)(Friends);
