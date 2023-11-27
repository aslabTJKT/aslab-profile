import axios from "axios";

const AxiosConfig = axios.create({
    baseURL: 'http://localhost:1411'
});
export default AxiosConfig;