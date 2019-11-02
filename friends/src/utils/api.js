import axios from 'axios';
import { ACCESS_TOKEN } from '../constants/constant';

export function userApi() {
   return axios.create({
       baseURL: 'http://localhost:5000',
       headers: {
          Authorization: JSON.parse(localStorage.getItem(ACCESS_TOKEN))
       }
   })
}