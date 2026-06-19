import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import chess_com_logo from "../../assets/logo_dark.png"
import lichess_logo from "../../assets/logo_light.png"

import Spacer from "../../components/Spacer"

const connectAcc = () => {
  const handlePress = () => {
    console.log("hi")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect your Acoount</Text>
      <Spacer/>
      <View style={styles.row}>
        <Pressable style={styles.accountOption} onPress={handlePress}>
          <Image source={chess_com_logo} style={styles.image}></Image>
          <Text style={styles.label}>Chess.com</Text>
        </Pressable>

        <Pressable style={styles.accountOption}>
          <Image source={lichess_logo} style={styles.image} />
          <Text style={styles.label}>Lichess</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default connectAcc

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  accountOption: {
    alignItems: 'center',
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 52,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
