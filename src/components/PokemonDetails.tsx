import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import PokemonDetailsHeader from './PokemonDetailsHeader';
import PokemonDetailsBody from './PokemonDetailsBody';
import BaseButton from './common/BaseButton';
import useTheme from '../hooks/useTheme';
import { NavigationPropType, Pokemon } from '../utils/types';
import { PokemonDetailsRoutePropType } from '../utils/types';
import { releasePokemon, selectIsCaptured } from '../redux/pokemonSlice';

interface PokemonDetailsProps {
    navigation: NavigationPropType;
    route: PokemonDetailsRoutePropType;
}

interface HeaderRightProps {
    item: Pokemon;
    captured: boolean;
}

const HeaderRight = ({ item, captured }: HeaderRightProps) => {
    const dispatch = useDispatch();
    const handleOnPress = () => dispatch(releasePokemon(item))

    if (!captured) return null;

    return (
        <BaseButton
            onPress={handleOnPress}
            text='Release'
        />
    )
}

const PokemonDetails = ({ route }: PokemonDetailsProps) => {
    const { item } = route?.params;
    const theme = useTheme();
    const styles = createStyle(theme);
    const navigation = useNavigation();
    const isCaptured = useSelector(selectIsCaptured(item.name));

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <HeaderRight captured={isCaptured} item={item} />
        })
    }, [isCaptured]);

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