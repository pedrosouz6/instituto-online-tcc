import Axios from 'axios';

export interface ErrorAxiosType {
    error: boolean,
    message: string
}

export const axios = Axios.create({
    baseURL: "http://localhost:3333/api"
})