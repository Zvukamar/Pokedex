import { View, StyleSheet } from 'react-native';
import PokemonDetailsHeader from './PokemonDetailsHeader';
import PokemonDetailsBody from './PokemonDetailsBody';
import useTheme from '../hooks/useTheme';
import { NavigationPropType } from '../utils/types';
import { PokemonDetailsRoutePropType } from '../utils/types';

interface PokemonDetailsProps {
    navigation: NavigationPropType;
    route: PokemonDetailsRoutePropType;
}

const PokemonDetails = ({ route }: PokemonDetailsProps) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    const { item } = route?.params;

    return (
        <View style={styles.container}>
            <PokemonDetailsHeader
                number={item.number}
                name={item.name}
                generation={item.generation}
                imageUrl={item.imageUrl}
            />

            <PokemonDetailsBody
                type_one={item.type_one}
                type_two={item.type_two}
                attack={item.attack}
                defense={item.defense}
                hit_points={item.hit_points}
                speed={item.speed}
                special_attack={item.special_attack}
                special_defense={item.special_defense}
            />
        </View>
    )
}

export default PokemonDetails;

const createStyle = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    }
})