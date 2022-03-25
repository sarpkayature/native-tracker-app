import { createStackNavigator } from '@react-navigation/stack'
import TrackList from '../../screens/TrackList'
import TrackDetail from '../../screens/TrackDetail'

const AuthRoutes = () => {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator>
      <Screen name='TrackList' component={TrackList} />
      <Screen name='TrackDetail' component={TrackDetail} />
    </Navigator>
  )
}

export default AuthRoutes
