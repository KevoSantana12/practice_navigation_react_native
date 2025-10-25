import { View, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'
import { Tabs } from 'expo-router'

const _layoutTabs = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#4F46E5', // Indigo más elegante
            tabBarInactiveTintColor: '#9CA3AF', // Gris sutil
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 0,
                elevation: 10,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 8,
                height: 65,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
            },
            tabBarLabelStyle: {
                fontSize: 13,
                fontWeight: '600',
                marginBottom: 5,
            },

        }}>
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