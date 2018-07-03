import {combineReducers} from 'redux';
import userReducer from './userReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer
  })

export default rootReducer;