import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Định nghĩa request
 */
axiosClient.interceptors.request.use(async (config) => {
    // Nếu có params, hãy xây dựng chuỗi truy vấn
    if (config.params) {
        const params = new URLSearchParams(config.params);
        params.append('api_key', apiConfig.apiKey);
        config.url += `?${params.toString()}`; 
    }
    return config;
});

/**
 * Định nghĩa response
 */
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});

export default axiosClient;
