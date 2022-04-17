import { getrequest, postrequest, deleterequest, putrequest } from './request'
export function payorder(orderId) {
    return postrequest({
        url: `/reception/order/order/${orderId}`,
    })
}
export function getorder(userId) {
    return getrequest({
        url: `/reception/order/orders/${userId}`,
    })
}
export function cancelorder(integers) {
    return deleterequest({
        url: `/reception/order/product`,
        data:{
            integers
        }
    })
}

