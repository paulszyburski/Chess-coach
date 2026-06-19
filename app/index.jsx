import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

import Spacer from "../components/Spacer"

const index = () => {
  const router = useRouter()

  const handlePress = () => {
    router.push('/connectAcc')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Spacer/>
      <Pressable 
      style={({pressed}) => [styles.btn, pressed && styles.pressed]}
      onPress={handlePress}
      >
        <Text style={{color:'#fff'}}>Continue</Text>
      </Pressable>
    </View>
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
    }
})
