import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PublicRoutes from './public-routes/publicRoutes'
import AuthRoutes from './auth-routes/authRoutes'
import { Context as AuthContext } from '../context/AuthContext'

const AppNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  const {
    state: { isAuthenticated },
  } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='PublicRoutes'
      >
        {isAuthenticated === false ? (
          <Screen name='PublicRoutes' component={PublicRoutes} />
        ) : (
          <>
            <Screen name='AuthRoutes' component={AuthRoutes} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
