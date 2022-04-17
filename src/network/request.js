import axios from 'axios'
export function getrequest(config){
    const instance = axios.create({
        baseURL:'http://47.96.154.143:9000',
        timeout:10000,
        method:'get',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    instance.interceptors.request.use(config=>{return config},err=>{console.log(err);}),
    instance.interceptors.response.use(res=>{return res.data},err=>{console.log(err);})
    return instance(config);
}
export function postrequest(config){
    const instance = axios.create({
        baseURL:'http://47.96.154.143:9000',
        timeout:10000,
        method:'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    instance.interceptors.request.use(config=>{return config},err=>{console.log(err);}),
    instance.interceptors.response.use(res=>{return res.data},err=>{console.log(err);})
    return instance(config);
}
export function putrequest(config){
    const instance = axios.create({
        baseURL:'http://47.96.154.143:9000',
        timeout:10000,
        method:'put',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    instance.interceptors.request.use(config=>{return config},err=>{console.log(err);}),
    instance.interceptors.response.use(res=>{return res.data},err=>{console.log(err);})
    return instance(config);
}
export function deleterequest(config){
    const instance = axios.create({
        baseURL:'http://47.96.154.143:9000',
        timeout:10000,
        method:'delete',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    instance.interceptors.request.use(config=>{return config},err=>{console.log(err);}),
    instance.interceptors.response.use(res=>{return res.data},err=>{console.log(err);})
    return instance(config);
}