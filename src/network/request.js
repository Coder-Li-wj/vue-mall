import axios from 'axios'

//封装axios
export function request(config){
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/api/v1',
        timeout:5000
    })

    //axios拦截器
    instance.interceptors.request.use(config => {//请求拦截
        return config
    }, err => {

    })

    instance.interceptors.response.use(res => {//响应拦截
        return res.data
    }, err => {

    })

    return instance(config) //发送真正网络请求
}