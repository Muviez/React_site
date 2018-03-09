import axios from "axios";
import {setAuthorizationToken} from '../utils/setAuthorizationToken.js';

export function login(data) {
    return axios.post('http://localhost:5000/api/auth/', data)
}

export const LogIn = () => {
    return {
        type: "SET_LOGGED",
        payload: true
    }
}


export function logout() {
    localStorage.removeItem('JWToken');
    setAuthorizationToken(false);
}


export const LogOut = () => {
    return {
        type: "UNSET_LOGGED",
        payload: false
    }
}

export const restore = data => {
    return axios.post('http://localhost:5000/api/auth/restore/', data)
}