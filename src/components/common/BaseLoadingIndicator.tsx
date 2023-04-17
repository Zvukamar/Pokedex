import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import useTheme from '../../hooks/useTheme';

interface BaseLoadingIndicatorProps {
    visible: boolean;
    size?: 'large' | 'small';
}

const BaseLoadingIndicator = ({ visible, size = 'small' }: BaseLoadingIndicatorProps) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    if (!visible) return null;

    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} />
        </View>
    )
}

export default React.memo(BaseLoadingIndicator);

const createStyle = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
    }
})