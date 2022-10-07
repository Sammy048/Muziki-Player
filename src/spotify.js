import axios from 'axios';



const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "ad24cce50a3e4a84ad171e65ad8bf7b0";
const redirectURI = "http://localhost:3000";
const scope = ['user-library-read', 'user-read-private'];


export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scope.join(
    "%20"
)}&response_type=token&show_dialog=true`;


const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;