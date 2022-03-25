import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PublicRoutes from './public-routes/publicRoutes'
import AuthRoutes from './auth-routes/authRoutes'

const AppNavigator = () => {
  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='PublicRoutes'
          component={PublicRoutes}
          options={{ header: () => null }}
        />
        <Screen
          name='AuthRoutes'
          component={AuthRoutes}
          options={{ header: () => null }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
