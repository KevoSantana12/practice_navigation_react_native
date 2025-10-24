import { View, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'
import { Tabs } from 'expo-router'

const _layoutTabs = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            {/*            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            /> */}
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="star" color={color} />,
                }}
            />

            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />


            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default _layoutTabs