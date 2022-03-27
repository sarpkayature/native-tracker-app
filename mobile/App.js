import { Provider as AuthProvider } from './src/context/AuthContext'
import AppNavigator from './src/routes/AppNavigator'
const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  )
}

export default App
