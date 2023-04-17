import { useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import { Alert } from 'react-native';

const usePermissions = () => {
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('You must enable the contacts permission from the settings to access all the features of the application.')
            }
        })();
    }, []);
}

export default usePermissions;