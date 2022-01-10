import { request } from './index.js' 
export default {
  register: data => request('POST', '/user/regist', data),
  login: data => request('POST', '/user/login', data),
  info: data => request('GET', '/user/info', data)
}
