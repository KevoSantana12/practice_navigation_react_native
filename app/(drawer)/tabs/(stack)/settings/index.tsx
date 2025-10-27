import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SettingsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{ title: 'Settings' }} />

            <Text>Settings Screen</Text>
        </View>
    )
}

export default SettingsScreen