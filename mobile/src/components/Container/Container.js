import { Text, View, StyleSheet } from 'react-native'

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    height: 100,
    paddingHorizontal: 18,
    backgroundColor: '#081229',
  },
})

export default Container
