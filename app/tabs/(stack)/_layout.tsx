import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const StackLayout = () => {
    return <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: '#49129C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            contentStyle: {
                backgroundColor: '#FFFFFF', // 🎨 fondo de toda la pantalla
            },
        }}
    ></Stack>
}

export default StackLayout;