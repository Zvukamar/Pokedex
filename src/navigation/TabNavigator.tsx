import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListIcon from '../assets/ListIcon';
import PokemonList from '../components/PokemonList';
import PokemonCapturedList from '../components/PokemonCapturedList';
import useTheme from '../hooks/useTheme';
import CapturedIcon from '../assets/CapturedIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen
                name='DEX'
                component={PokemonList}
                options={{
                    tabBarIcon: ({ color }) => <ListIcon fill={color} width={18} />,
                }}
            />

            <Tab.Screen
                name='Captured'
                component={PokemonCapturedList}
                options={{
                    tabBarIcon: ({ color }) => <CapturedIcon fill={color} width={18} />,
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;

const createStyle = (colors: any) => StyleSheet.create({
    tabBarStyle: {
        height: 50,
        backgroundColor: colors.background
    },
    tabBarLabelStyle: {
        fontSize: 15,
        color: colors.white
    }
});