import React from 'react'
import { Stack} from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
      <Stack.Screen name='support' options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout