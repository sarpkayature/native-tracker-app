import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PublicRoutes from './public-routes/publicRoutes'
import AuthRoutes from './auth-routes/authRoutes'

const AppNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  const auth = false
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='PublicRoutes'
      >
        {auth == false ? (
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
