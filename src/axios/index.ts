import Axios from 'axios';

export interface ErrorAxiosType {
    error: boolean,
    message: string
}

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})