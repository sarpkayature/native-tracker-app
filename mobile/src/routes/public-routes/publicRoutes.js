import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../../screens/SignUp'
import Login from '../../screens/Login'

const PublicRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Login' component={Login} />
      <Screen name='SignUp' component={SignUp} />
    </Navigator>
  )
}

export default PublicRoutes
