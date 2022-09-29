import Axios from 'axios';

export interface ErrorAxiosType {
    error: boolean,
    message: string
}

export const axios = Axios.create({
    baseURL: "https://backend-instituto-online.herokuapp.com/api"
})