import {USER_LOGIN} from './types';
import {register} from '../utils/logInSignUp';

export const loginUser = (type, credentials) => async dispatch => {
  console.log('dispatching')
  dispatch({
    type: USER_LOGIN,
    payload: await register(type, credentials)
  });
};



