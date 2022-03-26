import axios from 'axios'
import { REACT_APP_BASE_URL } from '@env'

const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  config: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
})

export default API
