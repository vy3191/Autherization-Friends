import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllFriends } from '../actions/Friends';
import Friend from './Friend';
import Load from '../components/Loader';
function Friends(props) {
  
  useEffect( () => {
      props.getAllFriends()
  },[]);

  console.log('line#14',props.friends);
  return (
    <React.Fragment>
      <h2>My Friends' List</h2>
      { props.fetchingFriends ? <Load /> :
       props.fetchedFriends && props.friends.map( (friend,index) => {
            return <Friend friend={friend} key={index}/>              
                    
      })}
    </React.Fragment>
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
     getAllFriends     
}
export default connect(mapStateToProps,
                       mapDispatchToProps)(Friends);
