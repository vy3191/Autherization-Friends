import { 
  LOGIN_LOADING, 
  LOGIN_SUCESS, 
  LOGIN_ERROR
} from '../actions/LoginActions';

const initialState = {
    username:"",
    password:"",
    isLoading: false,
    error: null
}

export function reducer(state=initialState, action) {
   switch(action.type) {
     case LOGIN_LOADING:
       return  {
          ...state,
          isLoading:true
       }
    case LOGIN_SUCESS:
      return {
        ...state, 
        isLoading:false, 

      }   
    case LOGIN_ERROR: 
     return {
       ...state, 
       isLoading:false
     } 
      
        
     default:
       return state
   }
}