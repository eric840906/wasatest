import axios from 'axios'
export interface UserData {
  id: number,
  name: string,
  height: number,
  weight: number,
  gender: string
}
const list = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}`
})
export const getList = () => list.request({
  url: '',
  method: 'GET'
})
