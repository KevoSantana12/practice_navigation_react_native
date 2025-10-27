import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from './components/shared/CustomDrawer';


const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={CustomDrawer}  // ✅ Aquí usamos tu CustomDrawer
            initialRouteName="user/index"
            screenOptions={{
                headerShown: true,
                drawerActiveTintColor: '#007AFF',
                drawerInactiveTintColor: '#444',
                drawerLabelStyle: {
                    fontSize: 15,
                    fontWeight: '500',
                    marginLeft: -10,
                },
                drawerStyle: {
                    backgroundColor: '#F8FAFC', // fondo claro
                    width: 250,
                },
            }}
        >
            <Drawer.Screen
                name="user/index"
                options={{
                    drawerLabel: 'Usuario',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="schedule/index"
                options={{
                    drawerLabel: 'Horario',
                    title: 'Horario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="tabs"
                options={{
                    drawerLabel: 'Tabs + Stack',
                    title: 'Tabs + Stack',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="layers-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />



            {/* Aquí ocultamos el index */}
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: () => null,
                    title: '',
                    drawerItemStyle: { display: 'none' },
                }}
            />

            <Drawer.Screen
                name="components/shared/CustomDrawer"
                options={{
                    drawerLabel: () => null,
                    title: '',
                    drawerItemStyle: { display: 'none' },
                }}
            />


        </Drawer>
    );
};

export default DrawerLayout;
