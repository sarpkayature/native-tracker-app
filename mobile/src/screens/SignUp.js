import { Text, StyleSheet, Button } from 'react-native'
import Container from '../components/Container/Container'
import RouterButton from '../components/Buttons/RouterButton'

const SignUp = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Text style={styles.title}>SignUp</Text>
      <RouterButton
        title='Do you have Account? Go to Login'
        onPress={() => navigate('Login')}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
})

export default SignUp
