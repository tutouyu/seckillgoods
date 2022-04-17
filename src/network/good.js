import { getrequest, postrequest, deleterequest, putrequest } from './request'
export function spikegood(spikeProductId,userId) {
    return postrequest({
        url: `/reception/product/${spikeProductId}/${userId}`,
    })
}
