import { getrequest, postrequest, deleterequest, putrequest } from './request'
export function getendactivity() {
    return getrequest({
        url: '/reception/activity/activities/end',
    })
}
export function getstartactivity() {
    return getrequest({
        url: '/reception/activity/activities/start',
    })
}
export function getoningactivity() {
    return getrequest({
        url: '/reception/activity/activities/spike',
    })
}
export function applyactivity(userId, activityId) {
    return getrequest({
        url: `/reception/activity/apply/${userId}/${activityId}`,
    })
}
export function attendactivity(userId, activityId) {
    return getrequest({
        url: `/reception/activity/attend/${userId}/${activityId}`,
    })
}
export function getactivitygood(activityId) {
    return getrequest({
        url: `/reception/activity/products/${activityId}`,
    })
}
