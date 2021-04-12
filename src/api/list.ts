import axios from 'axios'
const list = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}`
})
export const getList = () => list.request({
  url: '',
  method: 'GET'
})
