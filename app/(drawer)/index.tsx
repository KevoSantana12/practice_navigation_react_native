import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const DrawerIndex = () => {
    return (
        <Redirect href='user'></Redirect>
    )
}

export default DrawerIndex