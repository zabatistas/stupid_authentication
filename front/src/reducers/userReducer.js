import {USER_LOGIN, CLEAR_LOG_MESSAGES} from '../actions/types';
import localStorageHasItem from '../utils/localStorage/hasItem';

const initialState = {
  isLoggedIn: localStorageHasItem('token'),
  logInMessages: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: localStorageHasItem('token'),
        logInMessages: action.payload
      }
    case CLEAR_LOG_MESSAGES:
      return {
        ...state,
        logInMessages: []
      }
    default:
      return state;  
  }
}