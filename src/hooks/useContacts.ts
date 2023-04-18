import { useEffect, useState } from 'react';
import * as Contacts from 'expo-contacts';
import { Alert } from 'react-native';

const useContacts = () => {
    const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

    const getContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Name],
            });
            setContacts(data);
        } else {
            Alert.alert('You must enable the contacts permission from the settings to access all the features of the application.')
        }
    }

    useEffect(() => {
        getContacts();
    }, []);

    return contacts;
}

export default useContacts;