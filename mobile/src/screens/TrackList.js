import { Text, View, StyleSheet } from 'react-native'
import RouterButton from '../components/Buttons/RouterButton'
const TrackList = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>TrackList</Text>
      <RouterButton
        title='go back'
        onPress={() => navigate('PublicRoutes', { screen: 'SignUp' })}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TrackList
