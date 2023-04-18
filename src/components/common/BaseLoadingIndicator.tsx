import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import useTheme from '../../hooks/useTheme';

interface BaseLoadingIndicatorProps {
    visible: boolean;
    fullscreen?: boolean;
    size?: 'large' | 'small';
}

const BaseLoadingIndicator = ({ visible, fullscreen, size = 'small' }: BaseLoadingIndicatorProps) => {
    const theme = useTheme();
    const styles = createStyle(theme);

    if (!visible) return null;

    return (
        <View style={[styles.container, fullscreen && styles.fullScreen]}>
            <ActivityIndicator size={size} />
        </View>
    )
}

export default React.memo(BaseLoadingIndicator);

const createStyle = (colors: any) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
    },
    fullScreen: {
        flex: 1,
    }
})