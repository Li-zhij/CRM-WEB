import axios from 'axios'

const service = axios.create({
  // baseURL: '/api'
  baseURL: 'http://127.0.0.1:8080'
})

export default service
