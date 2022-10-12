import { combineReducers } from 'redux';
import userInfo from './userInfo';
import homeInfo from './homeInfo';

const reducers = combineReducers({
  userInfo,
  homeInfo,
});

export default reducers;
