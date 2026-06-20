import { StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

import Spacer from "../components/Spacer"
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import ThemedButton from '../components/ThemedButton'

const index = () => {
  const router = useRouter()

  const handlePress = () => {
    router.push('/choosePlatform')
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title>Welcome!</ThemedText>
      <Spacer/>
      <ThemedButton 
      style={({pressed}) => [styles.btn, pressed && styles.pressed]}
      onPress={handlePress}
      >
        <ThemedText style={styles.btnText}>Continue</ThemedText>
      </ThemedButton>
    </ThemedView>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    btn: {
      backgroundColor: "#a044b9",
      padding: 18,
      borderRadius: 6,
      marginVertical: 10,
    },
    btnText: {
      color: '#fff',
    },
})
