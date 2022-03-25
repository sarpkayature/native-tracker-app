import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrackCreate from '../../../screens/TrackCreate'
import Account from '../../../screens/Account'

export const BottomNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator>
      <Screen name='TrackCreate' component={TrackCreate} />
      <Screen name='Account' component={Account} />
    </Navigator>
  )
}
