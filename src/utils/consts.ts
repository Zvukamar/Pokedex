import { Platform } from 'react-native';

const isIos = Platform.OS === 'ios';
export const baseUrl = isIos ? 'http://localhost:8080' : 'http://10.0.2.2:8080';