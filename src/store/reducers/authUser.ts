import { SET_AUTH_USER } from '../actions/authUser';

const authUser = (state = null, { type, id }) =>
  type === SET_AUTH_USER ? id : state;

export default authUser;
