import createContext from './createDataContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import API from '../api/API'

const Reducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token,
      }
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      }
    case 'LOGIN_ERROR':
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const SignUp =
  dispatch =>
  async ({ email, password }) => {
    try {
      const response = await API.post('/signup', { email, password })
      const { token } = response.data
      if (token) {
        await AsyncStorage.setItem('token', token)
        dispatch({ type: 'SIGNUP', payload: { isAuthenticated: true, token } })
      }
    } catch (err) {
      console.log(err)
      return dispatch({
        type: 'LOGIN_ERROR',
        payload: 'Something went wrong 🙄',
      })
    }
  }

const Login =
  dispatch =>
  async ({ email, password }) => {
    try {
      const response = await API.post('/login', { email, password })
      const { token } = response.data
      if (token) {
        await AsyncStorage.setItem('token', token)
        dispatch({ type: 'LOGIN', payload: { isAuthenticated: true, token } })
      }
    } catch (err) {
      console.log(err)
      return dispatch({
        type: 'LOGIN_ERROR',
        payload: 'Something went wrong 🙄',
      })
    }
  }

export const { Context, Provider } = createContext(
  Reducer,
  { SignUp, Login },
  { isAuthenticated: false, errorMessage: '' }
)
