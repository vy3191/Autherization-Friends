import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { getAllFriends } from '../actions/Friends';
import Friend from './Friend';
import Load from '../components/Loader';
function Friends(props) {
  
  useEffect( () => {
     props.getAllFriends();
  },[]);

  console.log('line 11', props.friends)
  console.log('line12', props.fetchingFriends)
  console.log('line13', props.fetchedFriends)
  return (
    <div>
      <h2>My Friends' List</h2>
      { props.fetchingFriends ? <Load /> :
      props.fetchedFriends && props.friends.map( (friend,index) => {
            return <Friend friend={friend} key={index}/>
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
     getAllFriends
}
export default connect(mapStateToProps,
                       mapDispatchToProps)(Friends);
