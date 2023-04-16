import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux'
import { colors } from '../../utils';
import { selectIsDone } from '../../redux/pokemonSlice';

interface BaseLoadingIndicatorProps {
    size?: 'large' | 'small';
}

const BaseLoadingIndicator = ({ size = 'small' }: BaseLoadingIndicatorProps) => {
    const isDone = useSelector(selectIsDone);
    if (isDone) return null;

    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} />
        </View>
    )
}

export default React.memo(BaseLoadingIndicator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
})