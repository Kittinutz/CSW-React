import axios from 'axios'
export const CHANGE_USER = 'change_user';
export const FETCH_USERS = 'fetch_users';


export function changeUser(value) {
  console.log(value);
  return {
    type:CHANGE_USER,
    payload:value
  }
}
export  function  fetchUser(){
  const response =  axios.get('https://nodejscsw2.herokuapp.com/api/user')
  return {
    type:FETCH_USERS,
    payload:response
  }
  
}