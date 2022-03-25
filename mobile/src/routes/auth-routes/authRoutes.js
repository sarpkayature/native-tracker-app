import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrackList from '../../screens/TrackList'
import TrackCreate from '../../screens/TrackCreate'
import Account from '../../screens/Account'

const AuthRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
      initialRouteName='TrackList'
    >
      <Screen name='TrackList' component={TrackList} />
      <Screen name='Account' component={Account} />
      <Screen name='TrackCreate' component={TrackCreate} />
    </Navigator>
  )
}

export default AuthRoutes
