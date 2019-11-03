import axios from 'axios';
import { userApi } from '../utils/api';

export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_ERROR = "FETCHING_FRIENDS_ERROR";

export const SAVING_FRIENDS_START = "SAVING_FRIENDS_START";
export const SAVING_FRIENDS_SUCCESS = "SAVING_FRIENDS_SUCCESS";
export const SAVING_FRIENDS_ERROR = "SAVING_FRIENDS_ERROR";

export const UPDATING_FRIENDS_START = "UPDATING_FRIENDS_START";
export const UPDATING_FRIENDS_SUCCESS = "UPDATING_FRIENDS_SUCCESS";
export const UPDATING_FRIENDS_ERROR = "UPDATING_FRIENDS_ERROR";

export const DELETING_FRIENDS_START = "DELETING_FRIENDS_START";
export const DELETING_FRIENDS_SUCCESS = "DELETING_FRIENDS_SUCCESS";
export const DELETING_FRIENDS_ERROR = "DELETING_FRIENDS_ERROR";

export function getAllFriends() {
    return (dispatch) => {
       dispatch({type:FETCHING_FRIENDS_START});
       userApi().get('/api/friends')
                .then( response => {
                   console.log(response);
                   dispatch({type:FETCHING_FRIENDS_SUCCESS, payload:response.data})
                })
                .catch(err=>{
                  console.log(err);
                   dispatch({type:FETCHING_FRIENDS_ERROR, payload: err})
                })
    }
}

export function addFriends(newFriend) {
   return (dispatch) => {
      dispatch({type:SAVING_FRIENDS_START});
      userApi().post('/api/friends', newFriend)
               .then( response => {
                  console.log('getting post response', response);
                  dispatch({type:SAVING_FRIENDS_SUCCESS, payload:response.data})
               })
               .catch(err=>{
                 console.log(err);
                  dispatch({type:SAVING_FRIENDS_ERROR, payload: err})
               })
   }
}

export function removeFriend(friend) {
    return (dispatch) => {
        dispatch({type: DELETING_FRIENDS_START});
        userApi().delete(`/api/friends/${friend.id}`)
               .then( response => {
                  console.log('remove', response);
                  dispatch({type:DELETING_FRIENDS_SUCCESS, payload: response.data});
               })
               .catch( err => {
                  dispatch({type:DELETING_FRIENDS_ERROR, payload: err});
               })
    }
}
