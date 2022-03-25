import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const RouterButton = ({ onPress, title }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#EC5990',
  },
})

export default RouterButton
