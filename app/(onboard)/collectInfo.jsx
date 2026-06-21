import { StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { Link } from 'expo-router'

import { useUser } from '../../context/UserContext'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'


const collectInfo = () => {
  const { user, setUser } = useUser()
  const [stats, setStats] = useState(null)
  const [pfp, setPfp] = useState(null)

  const getStats = async () => {
    const statsResponse = await fetch(
      `http://192.168.0.166:8000/stats/${user.platform_username}?platform=${user.platform}`
    )
    const pfpResponse = await fetch(
      `http://192.168.0.166:8000/profile-picture/${user.platform_username}?platform=${user.platform}`
    )

    const stats = await statsResponse.json()
    const pfp = await pfpResponse.json()

    setStats(stats)
    setPfp(pfp)

    setUser((prev) => ({
      ...prev,
      stats: stats,
      pfpUrl: pfp
    }))
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
