import { Stack } from "expo-router"
import { Colors } from "../constants/Colors"
import { useColorScheme } from "react-native"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>

      <Stack initialRouteName="index" screenOptions={{
        headerStyle: [{ backgroundColor: theme.navBackground }],
        headerTintColor: theme.title,
      }}
      >
        {/* Folders */}
        
        <Stack.Screen name="(auth)" options={{headerShown: false}} />

        {/* Individual Screens */}

        <Stack.Screen name="index" options={{ title: "Home" }} />

      </Stack>
    </>
  )
}
