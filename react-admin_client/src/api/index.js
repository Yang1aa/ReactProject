import { ajax } from "./ajax";

export const reqLogin = (username, password) => {
    return ajax('/login', { username, password }, 'Post')
}
export const reqUserAdd = (username, password, phone, email, role_id ) => {
    return ajax('/manage/user/add', { username, password , phone, email, role_id }, 'Post')
}