import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Pokemon } from '../utils/types';
import { pokemonApi } from '../API/pokemonApi';
import { RootState } from './store';

export interface InitialState {
    currentPage: number;
    isFetching: boolean;
    favorites: Pokemon[];
    list: Pokemon[];
    isDone: boolean;
    hasError: boolean;
    uninitialized: boolean;
}

const initialState: InitialState = {
    favorites: [],
    list: [],
    isFetching: false,
    currentPage: 1,
    isDone: false,
    hasError: false,
    uninitialized: true
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAllPokemons.fulfilled, (state, { payload }) => {
            const { done, result } = payload;
            state.isFetching = false;
            state.uninitialized = false;
            state.isDone = done;
            state.list.push(...result);
        });
        builder.addCase(fetchAllPokemons.pending, (state) => {
            state.currentPage += 1;
            state.isFetching = true;
        });
        builder.addCase(fetchAllPokemons.rejected, (state) => {
            state.currentPage -= 1;
            state.isFetching = false;
            state.hasError = true;
            state.uninitialized = false;
        });
    }
});

// Action creators are generated for each case reducer function
export const { } = pokemonSlice.actions;

// Async actions  
export const fetchAllPokemons = createAsyncThunk(
    'pokemons/fetchAll',
    async (page: number, thunkAPI) => {
        const response = await pokemonApi.fetchAllPokemons(page);
        const { data } = response;
        return data;
    }
);

// Selectors
export const selectCurrentPage = (state: RootState) => state.pokemon.currentPage;
export const selectIsFetching = (state: RootState) => state.pokemon.isFetching;
export const selectPokemonList = (state: RootState) => state.pokemon.list;
export const selectIsDone = (state: RootState) => state.pokemon.isDone;
export const selectUninitialized = (state: RootState) => state.pokemon.uninitialized;
export const selectHasError = (state: RootState) => state.pokemon.hasError;
export const selectFavoritesList = (state: RootState) => state.pokemon.favorites;

export default pokemonSlice.reducer;