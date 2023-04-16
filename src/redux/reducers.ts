import { combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';

const reducers = combineReducers({
    pokemon: pokemonReducer
});

export default reducers;