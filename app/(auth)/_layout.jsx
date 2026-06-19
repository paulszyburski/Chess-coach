import { Stack } from 'expo-router'

const authLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{ headerShown: false, animation: "none" }}
      />
    </>
  )
}

export default authLayout