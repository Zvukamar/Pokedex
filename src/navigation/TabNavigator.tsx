import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BagIcon from '../assets/BagIcon';
import ListIcon from '../assets/ListIcon';
import PokemonList from '../components/PokemonList';
import PokemonFavoriteList from '../components/PokemonFavoriteList';
import useTheme from '../hooks/useTheme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle
            }}>
            <Tab.Screen
                name='DEX'
                component={PokemonList}
                options={{
                    tabBarIcon: ({ color }) => <ListIcon fill={color} width={18} />,
                }}
            />

            <Tab.Screen
                name='Favorites'
                component={PokemonFavoriteList}
                options={{
                    tabBarIcon: ({ color }) => <BagIcon fill={color} width={18} />,
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