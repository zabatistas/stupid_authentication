import {GET_MENU} from './types';
import axios from 'axios';

export const getMenu = () => async dispatch => {
  const response = await axios.get('http://localhost:4000/menu');
  dispatch({
    type: GET_MENU,
    payload: response.data
  });
};
