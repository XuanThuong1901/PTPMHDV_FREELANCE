import axios from "axios";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () =>{

    return {
        type: LOGIN_REQUEST,
        payload: null,
    }
}

export const loginSuccess = (user, check) =>{

    return {
        type: LOGIN_REQUEST,
        payload: user,
        check: check,
    }
}

export const loginFailure = (error, check) =>{

    return {
        type: LOGIN_REQUEST,
        payload: error,
        check: check,
    }
}

export const loginUser = (email, password) =>{
    
    return(dispatch) =>{

        dispatch(loginRequest())
        axios.post('https://localhost:3000/api/auth/login', {
            email, password
        })
        .then((response) =>{
            const { data } = response;
            dispatch(loginSuccess(data, true));
        })
        .catch((error) => {
            dispatch(loginFailure(error.message, false));
          })
    }
}