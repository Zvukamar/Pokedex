import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationPropType, Pokemon } from '../utils/types';
import PokemonAvatar from './PokemonAvatar';
import BaseText from './common/BaseText';

interface PokemonItemProps {
    item: Pokemon
}

const PokemonItem = ({ item }: PokemonItemProps) => {
    const navigation = useNavigation<NavigationPropType>();

    const handleItemPress = () => {
        navigation.navigate('PokemonDetails', { item });
    };

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleItemPress}
            style={styles.container}>
            <PokemonAvatar uri={item.imageUrl} />
            <BaseText numberOfLines={1} style={styles.text}>#{item.number} {item.name}</BaseText>
        </TouchableOpacity>
    )
}

export default PokemonItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 24,
        gap: 12
    },
    text: {
        width: 160,
        textAlign: 'center'
    }
});