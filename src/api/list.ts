import axios from 'axios'
export interface UserData {
  id: number,
  name: string,
  height: number,
  weight: number,
  gender: string
}
const list = axios.create({
  baseURL: '/v1/'
})
export const getList = () => list.request({
  url: process.env.VUE_APP_APIPATH,
  method: 'GET'
})
