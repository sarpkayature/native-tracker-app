import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const IButton = ({ onPress, title }) => {
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
    width: 300,
    height: 44,
    alignItems: 'center',
    backgroundColor: '#EC5990',
    borderRadius: 6,
  },
  title: {
    paddingTop: 6,
    fontSize: 22,
    color: '#F8F8F8',
  },
})

export default IButton
