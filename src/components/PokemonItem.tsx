import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationPropType, Pokemon } from '../utils/types';
import PokemonAvatar from './PokemonAvatar';
import BaseText from './common/BaseText';
import PokemonLikeButton from './PokemonLikeButton';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { togglePokemonLike } from '../redux/pokemonSlice';

interface PokemonItemProps {
    item: Pokemon
}

const PokemonItem = ({ item }: PokemonItemProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation<NavigationPropType>();

    const handleItemPress = () => {
        navigation.navigate('PokemonDetails', { item });
    };

    const toggleItemLikePress = () => {
        dispatch(togglePokemonLike(item));
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleItemPress}
            style={styles.container}>
            <PokemonAvatar uri={item.imageUrl} />
            <PokemonLikeButton
                liked={!!item.liked}
                onPress={toggleItemLikePress}
            />
            <BaseText numberOfLines={1} style={styles.text}>#{item.number} {item.name}</BaseText>
        </TouchableOpacity>
    )
}

export default React.memo(PokemonItem);

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