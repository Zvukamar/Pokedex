import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import ToggleIcon from '../../assets/ToggleIcon';
import { lightTheme } from '../../utils/colors';
import { toggleTheme } from '../../redux/globalSlice';

const ThemeChangeToggle = () => {
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    }

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={handleToggleTheme}
        >
            <ToggleIcon />
        </TouchableOpacity>
    )
}

export default ThemeChangeToggle;

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightTheme.white,
        borderRadius: 24,
        padding: 4
    }
})