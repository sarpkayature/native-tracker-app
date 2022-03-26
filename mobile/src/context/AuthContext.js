import createContext from './createDataContext'
import API from '../api/API'

const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

const SignUp = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await API.post('/signup', { email, password })
      console.log(response)
    } catch (err) {
      console.log(err.response.data)
    }

    // dispatch({ type: 'LOGIN', payload: data })
  }
}

export const { Context, Provider } = createContext(
  Reducer,
  { SignUp },
  { isAuthenticated: false }
)
