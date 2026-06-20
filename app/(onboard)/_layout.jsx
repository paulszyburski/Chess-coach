import { Stack } from 'expo-router'

const onBoardLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{ headerShown: false, animation: "none" }}
      />
    </>
  )
}

export default onBoardLayout