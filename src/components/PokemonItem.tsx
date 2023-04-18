import React from 'react';
import { TouchableOpacity, StyleSheet, InteractionManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as Contacts from 'expo-contacts';

import PokemonAvatar from './PokemonAvatar';
import BaseText from './common/BaseText';
import useContacts from '../hooks/useContacts';
import PokemonCaptureToggle from './PokemonCaptureToggle';
import { AppDispatch } from '../redux/store';
import { capturePokemon, releasePokemon, selectIsCaptured } from '../redux/pokemonSlice';
import { NavigationPropType, Pokemon } from '../utils/types';

interface PokemonItemProps {
    item: Pokemon
}

const PokemonItem = ({ item }: PokemonItemProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation<NavigationPropType>();
    const isCaptured = useSelector(selectIsCaptured(item.name));
    const contacts = useContacts();

    const handleItemPress = () => {
        InteractionManager.runAfterInteractions(() => {
            navigation.navigate('PokemonDetails', { item });
        });
    };

    const addToContactList = async () => {
        const name = `#${item.number} ${item.name}`;
        const pokemon = contacts.find(contact => contact.name === name);
        // Not yet in contacts list
        if (!pokemon) {
            const contact = {
                [Contacts.Fields.ID]: name,
                [Contacts.Fields.ContactType]: Contacts.ContactTypes.Person,
                [Contacts.Fields.Name]: name,
                [Contacts.Fields.FirstName]: name,
                [Contacts.Fields.Note]: `This Pokemon is ${item.legendary ? '' : 'not'} LEGENDARY!`
            };
            try {
                await Contacts.addContactAsync(contact);
            } catch (error) {
                console.log({ error })
            }
        }
    }

    const handleCapturePokemon = () => {
        dispatch(capturePokemon(item));
        addToContactList();
    }

    const handleReleasePokemon = () => {
        dispatch(releasePokemon(item));
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleItemPress}
            style={styles.container}>
            <PokemonAvatar uri={item.imageUrl} />
            <PokemonCaptureToggle
                captured={isCaptured}
                onCapture={handleCapturePokemon}
                onRelease={handleReleasePokemon}
            />
            <BaseText
                numberOfLines={1}
                style={styles.text}
            >
                #{item.number} {item.name}
            </BaseText>
        </TouchableOpacity>
    )
}

export default React.memo(PokemonItem);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 12,
        gap: 12
    },
    text: {
        width: 160,
        textAlign: 'center'
    }
});