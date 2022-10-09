import Axios from 'axios';
import { parseCookies } from 'nookies';

export interface ErrorAxiosType {
    error: boolean,
    message: string
}

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

axios.interceptors.request.use((config: any | undefined) => {
    const { ['token_user']: token } = parseCookies(null);

    if(token) {
        config.headers['Authorization'] =  token ? `Bearer ${token}` : '';
    }

    return config
})
