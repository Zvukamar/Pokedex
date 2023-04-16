import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';
import { RootStackParams } from '../utils/types';
import { colors } from '../utils';

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='PokemonList'
                    component={PokemonList}
                    options={{
                        title: 'Pokedex',
                        headerStyle: { backgroundColor: colors.background },
                        headerTitleStyle: { color: colors.white, fontSize: 20 }
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

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.background
    },
    headerTitleStyle: {
        color: colors.white,
        fontSize: 20
    }
});