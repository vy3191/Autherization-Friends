import { userApi } from '../utils/api';
import { ACCESS_TOKEN } from '../constants/constant';



export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";




export function getLogingDetails(props,user) {
    return (dispatch) => {
         dispatch({type: LOGIN_LOADING});
         userApi().post('/api/login', user)
              .then( response => {
                 console.log(response);
                 dispatch({type:LOGIN_SUCESS, payload: response.data.payload})
                 localStorage.setItem(ACCESS_TOKEN, JSON.stringify(response.data.payload));
                 props.history.push("/friends");
              })
              .catch( err => {
                 console.log(err.Error);
                 dispatch({type:LOGIN_ERROR,payload: err})
                 
              })
    }
}