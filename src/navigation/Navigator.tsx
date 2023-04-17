import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator';
import PokemonDetails from '../components/PokemonDetails';
import { RootStackParams } from '../utils/types';
import useTheme from '../hooks/useTheme';

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigator = () => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='PokemonList'
                    component={TabNavigator}
                    options={{
                        title: 'Pokedex',
                        headerStyle: styles.headerStyle,
                        headerTitleStyle: styles.headerTitleStyle
                    }}
                />

                <Stack.Screen
                    name='PokemonDetails'
                    component={PokemonDetails}
                    options={{
                        title: '',
                        headerBackTitle: '',
                        headerStyle: styles.headerStyle,
                        headerTitleStyle: styles.headerTitleStyle
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;

const createStyle = (colors: any) => StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.background
    },
    headerTitleStyle: {
        color: colors.white,
        fontSize: 20
    }
});