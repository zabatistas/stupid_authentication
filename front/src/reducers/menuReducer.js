import {GET_MENU} from '../actions/types';
import localStorageHasItem from '../utils/localStorage/hasItem';

const initialState = {
  menu: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MENU:
      return {
        ...state,
        menu: action.payload,
      }
    default:
      return state;  
  }
}