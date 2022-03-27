import axios from 'axios'
import { REACT_APP_BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  config: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
})

API.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.log(error)
  }
)

export default API
