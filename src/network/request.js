import axios from 'axios';

export function request(config){

    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
        
    // 请求拦截
    instance.interceptors.request.use(config =>{
        return config
    },err => {
        console.log(err)
    })
    // 响应请求
    instance.interceptors.response.use(resolve =>{
        return resolve.data;
    },err => {
        console.log(err)
    })
    return instance(config);
}



