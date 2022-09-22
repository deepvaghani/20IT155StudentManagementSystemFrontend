import { faLongArrowAltUp, faRegistered } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import React from 'react';

export default function AuthService() {
    const URL = "http://localhost:8080/authentication"

    let login = (username, password) => {
        return axios.post(URL, {username, password})
        .then(
            response => {
                if(response.data.token){
                    localStorage("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    let logout = () => {
        localStorage.removeItem("user");
    };

    let register = (userRegistrationDetails) =>{
        return axios.post(URL+"/register", userRegistrationDetails);
    }

    let getCurrentuser = () => {
        return JSON.parser(localStorage.getItem("user"));
    }
}