import { StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { Link } from 'expo-router'

import { useUser } from '../../context/UserContext'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'


const collectInfo = () => {
  const { user } = useUser()
  const [stats, setStats] = useState(null)

  const getStats = async () => {
    const response = await fetch(
      `http://192.168.0.166:8000/stats/${user.platform_username}?platform=${user.platform}`
    )
    const data = await response.json()
    setStats(data)
  }

  useEffect(() => {
    if (!user.platform || !user.platform_username) {
      return
    }

    getStats()
  }, [user.platform, user.platform_username])

  return (
    <ThemedView style={styles.container}>
      <ThemedText>{stats ? JSON.stringify(stats) : 'Loading stats...'}</ThemedText>
      <Spacer/>
      <Link href="/confirmAcc" style={styles.link}>
        <ThemedText>Continue</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default collectInfo

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})
