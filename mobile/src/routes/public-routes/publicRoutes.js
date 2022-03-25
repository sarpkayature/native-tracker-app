import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../../screens/SignUp'
import Login from '../../screens/Login'

const PublicRoutes = () => {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator initialRouteName='SignUp'>
      <Screen
        name='SignUp'
        component={SignUp}
        options={{ header: () => null }}
      />
      <Screen name='Login' component={Login} />
    </Navigator>
  )
}

export default PublicRoutes
