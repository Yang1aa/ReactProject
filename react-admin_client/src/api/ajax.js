import axios from "axios";

export function ajax(url, params = {}, method) {
    if (method.toLowerCase === 'get') {
        return axios.get(url, params = {
            ...params
        })
    } else
        return axios.post(url, params)
}