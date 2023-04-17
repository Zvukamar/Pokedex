import { View, StyleSheet } from 'react-native';
import BaseText from './BaseText';

const BaseEmptyList = () => {
    return (
        <View style={styles.container}>
            <BaseText>Sorry, there is no data.</BaseText>
        </View>
    );
}

export default BaseEmptyList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})