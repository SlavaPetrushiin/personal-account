import apiAuthentication from "../../api/login";
import {AUTHENTICATION_ERROR, AUTHENTICATION_SUCCESS} from "../types";

const  initialstate = {
    token: false,
    error: ''
};

const authentication = (state = initialstate, action) => {
    switch (action.type) {
        case AUTHENTICATION_SUCCESS:
            return {
                token: true
            };
        case AUTHENTICATION_ERROR:
            return {
                token: false,
                error: action.error
            };
        default:
            return state
    }
};

const authenticationSuccess = () => {
    return {
        type: AUTHENTICATION_SUCCESS,
        error: ''
    }
};

const authenticationError = (error) => {
    return {
        type: AUTHENTICATION_ERROR,
        error
    }
};

export const authenticationThunk = (email, password) => async (dispatch) => {
    try{
        const response = await apiAuthentication.login(email, password);
        dispatch(authenticationSuccess())
    } catch(e){
        const message = e.message
        dispatch(authenticationError(message))
    }
};

export default authentication;