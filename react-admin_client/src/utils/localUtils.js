/* eslint-disable import/no-anonymous-default-export */
import store from "store";

const USER_KEY = 'user_key';
const setUser = (user) => {
    return store.set(USER_KEY, user)
}
const getUser = () => {
    return store.get(USER_KEY) || {};
}
const removeUser = () => {
    return store.remove(USER_KEY)
}
export default { setUser, getUser, removeUser }