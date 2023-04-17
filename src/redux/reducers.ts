import { combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import globalReducer from './globalSlice';

const reducers = combineReducers({
    global: globalReducer,
    pokemon: pokemonReducer
});

export default reducers;