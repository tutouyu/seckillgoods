import { getrequest, postrequest, deleterequest, putrequest } from './request'
export function loginuser(password,username) {
    return postrequest({
        url: '/reception/user/login',
        data: {
            password,
            username
        }
    })
}
export function registeruser(password,username) {
    return postrequest({
        url: '/reception/user/register',
        params: {
            password,
            username
        }
    })
}