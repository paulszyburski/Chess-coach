import { StyleSheet, Image, View } from 'react-native'
import { Link } from 'expo-router'

import { useUser } from '../../context/UserContext'

import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import ThemedCard from '../../components/ThemedCard'

const confirmAcc = () => {
  const { user } = useUser()
  const stats = user.stats
  const pfpUrl = user.pfpUrl

  const handlePress = () => {
    console.log(JSON.stringify(stats, null, 2))
    console.log(JSON.stringify(pfpUrl, null, 2))
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>Is That You?</ThemedText>

      <ThemedCard style={styles.card}>
        {pfpUrl ? (
          <Image
            source={{ uri: pfpUrl }}
            style={styles.pfp}
          />
        ) : (
          <ThemedView style={styles.pfpFallback}>
            <ThemedText style={styles.fallbackText} title={true}>
              ?
            </ThemedText>
          </ThemedView>
        )}
        <View style={styles.info}>
          <ThemedText style={styles.username}>{user.platform_username}</ThemedText>
          <ThemedText>{user.platform}</ThemedText>
        </View>
      </ThemedCard>

      
      <Spacer/>
      <Link href="/confirmAcc" style={styles.link} onPress={handlePress}>
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
  },
  title: {
    fontWeight: '700',
    fontSize: 30
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    marginTop: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
  pfp: {
    width: 84,
    height: 84,
    borderRadius: 6,
  },
  pfpFallback: {
    width: 84,
    height: 84,
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  fallbackText: {
    fontSize: 40,
    fontWeight: '700',
  },
  username: {
    fontSize: 22,
    fontWeight: '600',
  },
})
