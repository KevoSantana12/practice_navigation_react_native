

import { Link, Redirect } from "expo-router";
import { Text, View, Pressable } from "react-native";

export default function Index() {
    return (
        // <View className="flex-1 items-center justify-center bg-white">
        //     <Text className="text-lg font-bold text-red-600">
        //         Bienvenido a mi app Expo Router + Tailwind porrra 🎉
        //     </Text>

        //     <Link href="/products">Products</Link>
        // </View>

        /*         <View className="flex-1 items-center justify-center bg-white">
                    <Text className="text-2xl font-bold mb-6">Bienvenido a mi App 🚀</Text>
        
                    <Link href="/(stack)/" asChild>
                        <Pressable className="bg-blue-500 px-6 py-3 rounded-xl">
                            <Text className="text-white font-semibold text-lg">Entrar al Homee</Text>
                        </Pressable>
                    </Link>
                </View> */

        /*         <Redirect href='/(stack)/'>
        
                </Redirect> */

        <Redirect href='(drawer)'>

        </Redirect>



    );
}
