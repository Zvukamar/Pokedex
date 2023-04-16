import axios from 'axios';
import { baseUrl } from '../utils/consts';

export const axiosInstance = axios.create({
    baseURL: baseUrl
});
