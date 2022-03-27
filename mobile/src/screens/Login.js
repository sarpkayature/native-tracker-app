import { useContext, useState } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import IButton from '../components/Buttons/Button'
import Container from '../components/Container/Container'
import RouterButton from '../components/Buttons/RouterButton'

const Login = ({ navigation: { navigate } }) => {
  const { state, Login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(state)

  return (
    <Container>
      <View style={styles.view}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder='Email'
          placeholderTextColor='#F8F8F8'
          autoCapitalize={'none'}
          autoCorrect={false}
          style={styles.input}
          secureTextEntry={false}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor='#F8F8F8'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />

        {state.errorMessage ? (
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}

        <IButton title='Login' onPress={() => Login({ email, password })} />
        <RouterButton
          title="Don't you have Account? Go to Sign Up"
          onPress={() => navigate('SignUp')}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  view: {
    height: 560,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    paddingBottom: 30,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    height: 60,
    width: 300,
    fontSize: 20,
    marginBottom: 16,
    paddingLeft: 16,
    color: '#F8F8F8',
    borderWidth: 0.86,
    borderRadius: 6,
    padding: 10,
    borderColor: 'white',
  },
  errorMessage: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 6,
  },
})

export default Login
