import {FETCHING_FRIENDS_START,
        FETCHING_FRIENDS_SUCCESS,
        FETCHING_FRIENDS_ERROR,
        FETCHING_SINGLE_FRIEND_START,
        FETCHING_SINGLE_FRIEND_SUCCESS,
        FETCHING_SINGLE_FRIEND_ERROR,
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
  fetchingSingleFriend:false,
  fetchedSingleFriend:false,
  savingFriends:false,
  savedFriends:false,
  updatingFriends:false,
  updatedFriedns:false,
  deletingFriends:false,
  deletedFriends:false,
  friends:[],
  friend:{},
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

      case SAVING_FRIENDS_START:
        return {
          ...state, 
          savingFriends:true
        }
      case SAVING_FRIENDS_SUCCESS:
         return {
           ...state, 
           savingFriends:false,
           savedFriends:true,
           friends: [...state.friends,action.payload ]
         }  
      case SAVING_FRIENDS_ERROR:
         return {
           ...state, 
           savingFriends:false,
           savedFriends: false,
           error: action.payload
         }  
    case FETCHING_SINGLE_FRIEND_START:
        return {
          ...state, 
          fetchingSingleFriend:true,          
          
        }
    case FETCHING_SINGLE_FRIEND_SUCCESS:
       return {
         ...state, 
         fetchingSingleFriend:false,
         fetchedSingleFriend: true,
         friend:{...action.payload}
       } 

    case FETCHING_SINGLE_FRIEND_ERROR:
       return {
         ...state, 
         fetchingSingleFriend:false,
         fetchedSingleFriend:false,
         error: action.payload
       }  

    case UPDATING_FRIENDS_START:
         return {
           ...state,
           updatingFriends:true           
         }   

     case UPDATING_FRIENDS_SUCCESS:
         return {
            ...state,
            updatingFriends:false,
            updatedFriedns:true,
            friends: [...state.friends]
         }

     case UPDATING_FRIENDS_ERROR:
     return {
         ...state,
         updatingFriends:false,
         updatedFriedns:false,
         error:action.payload
     }           
         
      case DELETING_FRIENDS_START:
          return {
            ...state,
            deletingFriends:true           
          }   
      case DELETING_FRIENDS_SUCCESS:
          return {
             ...state,
             deletingFriends:false,
             deletedFriedns:true,
             friends: [...action.payload]
          }
      case DELETING_FRIENDS_ERROR:
      return {
          ...state,
          deletingFriends:false,
          deletedFriedns:false,
          error:action.payload
      }        

      
      default:
       return state
    }
}