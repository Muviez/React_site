import axios from "axios";
import {setAuthorizationToken} from '../utils/setAuthorizationToken.js';

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

export function login(data) {
    return axios.post('http://127.0.0.1:5000/api/auth/', data)
    .then(res => {
        localStorage.setItem('JWToken', 'token-x');
        const token = localStorage.getItem('JWToken');
        setAuthorizationToken(token);
    });
}

export const LogOut = () => {
    return {
        type: "UNSET_LOGGED",
        payload: false
    }
}