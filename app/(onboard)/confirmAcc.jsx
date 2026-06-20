import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'

const confirmAcc = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>confirmAcc</ThemedText>
      <Spacer/>
      <Link href="/confirmAcc" style={styles.link}>
        <ThemedText>Continue</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default confirmAcc

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})