import { TouchableOpacity, StyleSheet } from 'react-native';

import EmptyHeartIcon from '../assets/EmptyHeartIcon';
import HeartIcon from '../assets/HeartIcon';

interface PokemonCaptureToggleProps {
    captured: boolean;
    onCapture: () => void;
    onRelease: () => void;
}

const PokemonCaptureToggle = ({ captured, onCapture, onRelease }: PokemonCaptureToggleProps) => {
    const handleOnPress = () => {
        captured ? onRelease() : onCapture();
    }

    return (
        <TouchableOpacity
            hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
            style={styles.container}
            activeOpacity={0.7}
            onPress={handleOnPress}>

            {captured ? <HeartIcon /> : <EmptyHeartIcon />}

        </TouchableOpacity>
    )
}

export default PokemonCaptureToggle;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 22,
        top: 6,
    },
});