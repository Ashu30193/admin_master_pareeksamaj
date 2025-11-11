import apiEndPoints from '@/utils/apiEndPoints';
import { callApi, hostname } from '@/utils/apiUtils';
import Axios from 'axios';
import firebase from '@/firebase/firebase';

export const userRegister = (body) =>
  Axios.post(`${hostname()}/xapi/v1/accounts`, body)
    .then((result) => result?.data)
    .catch(() => {});

export const checkEmail = (path) =>
  Axios.post(`${hostname()}/xapi/v1/user/isExistingLoginId?user_id=${path}`);

export const queryCurrent = (pathParams) =>
  callApi({ uriEndPoint: apiEndPoints.user.fetchCurrent.v1, pathParams })
    .then((res) => res)
    .catch(() => {});

export const updateCurrent = (body) =>
  callApi({ uriEndPoint: apiEndPoints.user.updateCurrent.v1, body })
    .then((res) => res)
    .catch(() => {});

export const userAvatar = ({ body, pathParams }) =>
  callApi({ uriEndPoint: apiEndPoints.user.uploadAvatar.v1, body, pathParams })
    .then((res) => res)
    .catch(() => {});

export const updateUserProfile = ({ body, pathParams }) =>
  callApi({ uriEndPoint: apiEndPoints.user.updateProfile.v1, body, pathParams })
    .then((res) => res)
    .catch(() => {});

export const forgotUserPassword = ({ body }) =>
  callApi({ uriEndPoint: apiEndPoints.user.forgotPassword.v1, body })
    .then((res) => res)
    .catch(() => {});

export const updateUserPassword = ({ body }) =>
  callApi({ uriEndPoint: apiEndPoints.user.updatePassword.v1, body })
    .then((res) => res)
    .catch(() => {});

export const signUp = () => {
  const user = {
    firstName: 'Sandeep',
    lastName: 'Mansotra',
    password: '123456789',
    engageTime: 0,
    phoneNumber: '9149665892',
  };
  return firebase
    .firestore()
    .collection('users')
    .doc('sandeep_mansotra')
    .set(user)
    .then((doc) => doc)
    .catch((error) => error);
};

export const fetchUsers = ({ query }) =>
  callApi({ uriEndPoint: apiEndPoints.user.fetchUsers.v1, query })
    .then((res) => res)
    .catch(() => {});

export const updateUser = ({ body, pathParams }) =>
  callApi({ uriEndPoint: apiEndPoints.user.updateUser.v1, body, pathParams })
    .then((res) => res)
    .catch(() => {});
