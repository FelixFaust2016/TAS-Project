import axios from 'axios';

export const apiConfig = {
    baseUrl: 'https://192.168.122.1:8083/api/',
    // should end with a slash
    clientId: '1',
    clientSecret: 'xc34jamesDevV41XwKbWhrsGgHvR3hjwG8',
};

export const client = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        Accept: 'application/json',
    },
    data: {
        // client_id: apiConfig.clientId,
        // client_secret: apiConfig.clientSecret,
        id: 'password',
        scope: '*',
    },
});
