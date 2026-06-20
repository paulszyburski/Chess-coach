import { StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import { useUser } from '../../context/UserContext'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'

const inputUsername = () => {
  const router = useRouter()
  const { user, setUser } = useUser()
  const [username, setUsername] = useState('')

  const handlePress = () => {
    setUser((prev) => ({
      ...prev,
      platform_username: username,
    }))
    router.push('/collectInfo')
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label} title={true}>Give us your username on {user.platform}</ThemedText>
      <Spacer/>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholder='Enter you username'
      />
      <Spacer/>
      <ThemedButton onPress={handlePress}>
        <ThemedText style={styles.btnText}>Continue</ThemedText>
      </ThemedButton>
    </ThemedView>
  )
}

export default inputUsername

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
  btnText: {
    color: '#fff',
  },
})
