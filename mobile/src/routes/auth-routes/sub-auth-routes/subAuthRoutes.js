import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TrackDetail from '../../screens/TrackDetail'

const AuthRoutes = () => {
  const { Navigator, Screen, Group } = createNativeStackNavigator()
  return (
    <Navigator>
      <Group>
        <Screen name='TrackDetail' component={TrackDetail} />
      </Group>
    </Navigator>
  )
}

export default AuthRoutes
