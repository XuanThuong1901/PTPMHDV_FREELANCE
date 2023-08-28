import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/LoginAction';

const initialState = {
  loading: false,
  user: null,
  error: null,
  check: false,
};

const loginReducer = (state = initialState, action) => {
  
    switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
        error: null,
        check: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
        check: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
        check:false
      };
    default:
      return state;
  }
  return state;
};

export default loginReducer;
