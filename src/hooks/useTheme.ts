import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../utils/colors';
import { selectAppTheme } from '../redux/globalSlice';

const useTheme = () => {
    const theme = useSelector(selectAppTheme);
    const isDark = theme === 'dark';

    const colors = {
        ...(isDark ? lightTheme : darkTheme)
    };

    return colors;
}

export default useTheme;