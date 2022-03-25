import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  secureTextEntry,
} from 'react-native'

const SInput = ({
  placeholder,
  onChangeText,
  text,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
}) => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#F8F8F8'
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        autoCorrect={autoCorrect ? autoCorrect : false}
        style={styles.input}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: '#F8F8F8',
    paddingVertical: 12,
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
})

export default SInput
