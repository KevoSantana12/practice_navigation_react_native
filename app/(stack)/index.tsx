// app/(stack)/index.tsx
import { View, Text } from 'react-native';
import { Link, Redirect } from "expo-router";

export default function StackIndex() {
    return (
        /*     <View className="flex-1 items-center justify-center bg-gray-100">
                <Text className="text-xl font-bold">🌟 Este es el StackLayout sin ir a Home</Text>
    
    
                <Text className="text-xl font-bold">🌟 Link para testear el home</Text>
    
                <Link href="/home"> Test </Link>
    
    
            </View> */

        <Redirect href='/home'>

        </Redirect>
    );
}
