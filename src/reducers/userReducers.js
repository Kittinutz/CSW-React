import {CHANGE_USER, FETCH_USERS} from "../actions/index";

const initalState ={
  name:'kittinut',
  surname:'pramhan',
  userlist:[]
};

export default (state=initalState,action)=>{
  switch (action.type){
    case
      CHANGE_USER:
      return state,action.payload;
    case FETCH_USERS:
      return {...state,userlist:action.payload.data}
    default:
      return state;
  }
}