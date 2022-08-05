import { resetCart } from './cartRedux';
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
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from './userRedux';
import { publicRequest, userRequest } from '../apiCalls/productApi';
import {
  getItemsFailure,
  getItemsStart,
  getItemsSuccess,
  deleteItemsStart,
  deleteItemsSuccess,
  deleteItemsFailure,
  updateItemStart,
  updateItemSuccess,
  updateItemFailure,
  addItemStart,
  addItemSuccess,
  addItemFailure,
} from './productRedux';

import {
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
} from './orderRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  // console.log('Create user apicalls', user);
  try {
    const res = await publicRequest.post('auth/loginUser', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('auth/createUser', user);
    console.log('Create user', user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    const res = await publicRequest.get('auth/logoutUser');
    dispatch(logoutSuccess(res.data));
  } catch (err) {
    dispatch(logoutFailure());
  }
};

export const getItems = async (dispatch) => {
  dispatch(getItemsStart());
  try {
    const res = await publicRequest.get('product/getProducts');
    dispatch(getItemsSuccess(res.data));
  } catch (err) {
    dispatch(getItemsFailure());
  }
};

export const deleteItem = async (id, dispatch) => {
  dispatch(deleteItemsStart());
  try {
    const res = await userRequest.delete(`product/deleteProduct/${id}`);
    dispatch(deleteItemsSuccess(res.data));
  } catch (err) {
    dispatch(deleteItemsFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await publicRequest.get('user/getAllUsers');
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await userRequest.delete(`user/deleteUser/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateItem = async (id, product, dispatch) => {
  dispatch(updateItemStart());
  try {
    const res = await userRequest.patch(`product/editProduct/${id}`, product);
    dispatch(updateItemSuccess(res.data));
  } catch (err) {
    dispatch(updateItemFailure());
  }
};

export const addItem = async (product, dispatch) => {
  dispatch(addItemStart());
  try {
    const res = await userRequest.post(`product/createProduct`, product);
    dispatch(addItemSuccess(res.data));
  } catch (err) {
    dispatch(addItemFailure());
  }
};

export const addOrder = async (order, dispatch) => {
  dispatch(addOrderStart());
  try {
    const res = await userRequest.post(`order/createOrder`, order);
    dispatch(addOrderSuccess(res.data));
  } catch (err) {
    dispatch(addOrderFailure());
  }
};

export const resetAction = async (dispatch) => {
  dispatch(resetCart());
};

export const getOrders = async (dispatch) => {
  dispatch(getOrdersStart());
  try {
    const res = await userRequest.get('order/getAllOrders');
    dispatch(getOrdersSuccess(res.data));
  } catch (err) {
    dispatch(getOrdersFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.patch(`user/updateUser/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
