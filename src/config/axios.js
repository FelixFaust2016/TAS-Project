import axios from 'axios';

export const apiConfig = {
    baseUrl: process.env.BASEURL,
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
