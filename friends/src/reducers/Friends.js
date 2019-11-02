import {FETCHING_FRIENDS_START,
        FETCHING_FRIENDS_SUCCESS,
        FETCHING_FRIENDS_ERROR,
        SAVING_FRIENDS_START,
        SAVING_FRIENDS_SUCCESS,
        SAVING_FRIENDS_ERROR,
        UPDATING_FRIENDS_START,
        UPDATING_FRIENDS_SUCCESS,
        UPDATING_FRIENDS_ERROR,
        DELETING_FRIENDS_START,
        DELETING_FRIENDS_SUCCESS,
        DELETING_FRIENDS_ERROR
      } from '../actions/Friends';

const initialState = {
  fetchingFriends:false,
  fetchedFriends:false,
  savingFriends:false,
  savedFriends:false,
  updatingFriends:false,
  updatedFriedns:false,
  deletingFriends:false,
  deletedFriends:false,
  friends:[],
  error: null
}  

export function reducer(state=initialState, action) {
    switch(action.type) {
      case FETCHING_FRIENDS_START:
        return {
          ...state, 
          fetchingFriends: true
        }
      case FETCHING_FRIENDS_SUCCESS:
         return {
           ...state,
           fetchedFriends: true,
           fetchingFriends:false,
           friends:action.payload
         } 
      case FETCHING_FRIENDS_ERROR:
      return {
        ...state,        
        fetchingFriends:false,
        error:action.payload
      }    
      default:
       return state
    }
}