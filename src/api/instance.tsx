import axios from 'axios';
const instance = axios.create({
    baseURL : 'https://asm-node-js-rosy.vercel.app/api'
})
export default instance

