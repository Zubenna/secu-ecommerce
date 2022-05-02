import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from './userRedux';
import { publicRequest } from '../apiCalls/productApi';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/loginUser', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/createUser', user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch, user) => {
  dispatch(logoutStart());
  try {
    const res = await publicRequest.post('/auth/logoutUser', user);
    dispatch(logoutSuccess(res.data));
  } catch (err) {
    dispatch(logoutFailure());
  }
};
