import { Pressable, StyleSheet, Image } from 'react-native'
import { useRouter } from 'expo-router'

import { useUser } from '../../context/UserContext'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'

import chess_com_logo from "../../assets/logo_dark.png"
import lichess_logo from "../../assets/logo_light.png"

import Spacer from "../../components/Spacer"

const connectAcc = () => {
  const router = useRouter()
  const { user, setUser } = useUser()

  const handleChesscomPress = () => {
    setUser((prev) => ({
      ...prev,
      platform: 'chess.com',
    }))
    router.push('/inputUsername')
  }

  const handleLichessPress = () => {
    setUser((prev) => ({
      ...prev,
      platform: 'lichess',
    }))
    router.push('/inputUsername')
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title>Connect your Acoount</ThemedText>
      <Spacer/>
      <ThemedView style={styles.row}>
        <Pressable style={styles.accountOption} onPress={handleChesscomPress}>
          <Image source={chess_com_logo} style={styles.image}></Image>
          <ThemedText style={styles.label}>Chess.com</ThemedText>
        </Pressable>

        <Pressable style={styles.accountOption} onPress={handleLichessPress}>
          <Image source={lichess_logo} style={styles.image} />
          <ThemedText style={styles.label}>Lichess</ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
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
