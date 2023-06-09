import { View, StyleSheet, ScrollView } from 'react-native';
import BaseText from './common/BaseText';
import PokemonTypeLabel from './PokemonTypeLabel';
import PokemonStats from './PokemonStats';
import useTheme from '../hooks/useTheme';

interface PokemonDetailsBodyProps {
    type_one: string;
    type_two: string;
    attack: number;
    defense: number;
    hit_points: number;
    speed: number;
    special_attack: number;
    special_defense: number;
}

const PokemonDetailsBody = ({ type_one, type_two, attack, defense, hit_points, speed, special_attack, special_defense }: PokemonDetailsBodyProps) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <View style={styles.container}>
            <View style={styles.typeContainer}>
                {type_one && <PokemonTypeLabel text={type_one} />}
                {type_two && <PokemonTypeLabel text={type_two} />}
            </View>

            <BaseText style={styles.baseStatsText}>Base Stats:</BaseText>

            <ScrollView contentContainerStyle={styles.statsContainer}>
                <PokemonStats name={'HP'} value={`${hit_points}`} />
                <PokemonStats name={'ATK'} value={`${attack}`} />
                <PokemonStats name={'DEF'} value={`${defense}`} />
                <PokemonStats name={'SPEED'} value={`${speed}`} />
                <PokemonStats name={'SP.ATK'} value={`${special_attack}`} />
                <PokemonStats name={'SP.DEF'} value={`${special_defense}`} />
            </ScrollView>
        </View>
    )
}

export default PokemonDetailsBody;

const createStyle = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 10,
        gap: 12,
    },
    typeContainer: {
        flexDirection: 'row',
        gap: 8,
        marginVertical: 18,
    },
    statsContainer: {
        gap: 12
    },
    baseStatsText: {
        fontSize: 24,
        marginBottom: 4
    }
})