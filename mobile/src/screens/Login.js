import { useContext, useState } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { Text, StyleSheet, View } from 'react-native'
import Container from '../components/Container/Container'
import RouterButton from '../components/Buttons/RouterButton'
import SInput from '../components/Input/SInput'
import IButton from '../components/Buttons/Button'

const Login = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.view}>
        <Text style={styles.title}>Login</Text>
        <SInput placeholder='E-mail' />
        <SInput placeholder='Password' secureTextEntry={true} />
        <IButton title='Login' onPress={() => {}} />
        <RouterButton
          title="Don't you have Account? Go to Sign Up"
          onPress={() => navigation.navigate('SignUp')}
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
})
export default Login
