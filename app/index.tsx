

import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        // <View className="flex-1 items-center justify-center bg-white">
        //     <Text className="text-lg font-bold text-red-600">
        //         Bienvenido a mi app Expo Router + Tailwind porrra 🎉
        //     </Text>

        //     <Link href="/products">Products</Link>
        // </View>

        <Redirect href='/home'>

        </Redirect>
    );
}
