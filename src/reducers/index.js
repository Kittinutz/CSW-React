import {combineReducers} from 'redux'
import users from './userReducers';

const rootReducers = combineReducers({
  users,
});
export default  rootReducers;