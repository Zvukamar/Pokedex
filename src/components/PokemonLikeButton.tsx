import { TouchableOpacity, StyleSheet } from 'react-native';

import EmptyHeartIcon from '../assets/EmptyHeartIcon';
import HeartIcon from '../assets/HeartIcon';

interface PokemonLikeButtonProps {
    liked: boolean;
    onPress: () => void;
}

const PokemonLikeButton = ({ liked, onPress }: PokemonLikeButtonProps) => {
    return (
        <TouchableOpacity
            hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}>

            {liked ? <HeartIcon /> : <EmptyHeartIcon />}

        </TouchableOpacity>
    )
}

export default PokemonLikeButton;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 22,
        top: 6,
    },
});