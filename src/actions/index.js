import axios from 'axios'
const TEST_URL ='http://localhost:3050/api/user';
export const CHANGE_USER = 'change_user';
export const FETCH_USERS = 'fetch_users';


export function changeUser(value) {
  console.log(value);
  return {
    type:CHANGE_USER,
    payload:value
  }
}
//read
export  function  fetchUser(){
  const response =  axios.get(`${TEST_URL}`);
  return {
    type:FETCH_USERS,
    payload:response
  }
  
}
export function createUser(value) {
  const response = axios.post(`${TEST_URL}`,value);
  return {
    type:FETCH_USERS,
    payload:response
  }
  
}

export function deleteUser(id) {
  const response = axios.delete(`${TEST_URL}/${id}`);
    return{
      type:FETCH_USERS,
      payload:response
    }
  
}

export function updateUser(id,payload) {
  const response = axios.put(`${TEST_URL}/${id}`,payload)
  return {
    type:FETCH_USERS,
    payload:response
  }
  
}