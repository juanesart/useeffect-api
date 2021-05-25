import axios from 'axios';

export const breakingApi = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api'
})