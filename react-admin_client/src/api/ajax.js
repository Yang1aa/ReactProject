import axios from "axios";
import { message } from "antd";

export function ajax(url, params = {}, method) {
    return new Promise((resolve, reject) => {
        let promise;
        if (method.toLowerCase === 'get') {
            promise = axios.get(url, params = {
                ...params
            })
        } else
            promise = axios.post(url, params)
        promise.then((response) => {
            resolve(response.data)
        })
        promise.catch((error) => {
            message.error(error)
        })
    })

}