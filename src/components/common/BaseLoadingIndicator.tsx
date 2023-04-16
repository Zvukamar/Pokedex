import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../utils';

interface BaseLoadingIndicatorProps {
    size?: 'large' | 'small';
}

const BaseLoadingIndicator = ({ size = 'small' }: BaseLoadingIndicatorProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} />
        </View>
    )
}

export default BaseLoadingIndicator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
})