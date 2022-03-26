import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PublicRoutes from './public-routes/publicRoutes'
import AuthRoutes from './auth-routes/authRoutes'
import { Provider as AuthProvider } from '../context/AuthContext'

const AppNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName='PublicRoutes'
        >
          {0 == false ? (
            <Screen name='PublicRoutes' component={PublicRoutes} />
          ) : (
            <>
              <Screen name='AuthRoutes' component={AuthRoutes} />
            </>
          )}
        </Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default AppNavigator
