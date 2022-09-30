import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance =  axios.create({
    baseURL: 'https://5014-156-194-246-255.eu.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance;