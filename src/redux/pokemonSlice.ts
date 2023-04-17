import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';

import { Pokemon } from '../utils/types';
import { pokemonApi } from '../API/pokemonApi';
import { RootState } from './store';

export interface InitialState {
    currentPage: number;
    isFetching: boolean;
    list: Pokemon[];
    isDone: boolean;
    hasError: boolean;
}

const initialState: InitialState = {
    list: [],
    isFetching: false,
    currentPage: 1,
    isDone: false,
    hasError: false,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        togglePokemonLike: (state, { payload }) => {
            const index = state.list.findIndex(item => item.name === payload.name);
            state.list[index].liked = !state.list[index].liked;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchAllPokemons.fulfilled, (state, { payload }) => {
            const { done, result } = payload;
            state.isFetching = false;
            state.isDone = done;
            result.forEach((item: Pokemon) => item.liked = false);
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
        });
    }
});

// Action creators are generated for each case reducer function
export const { togglePokemonLike } = pokemonSlice.actions;

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
export const selectHasError = (state: RootState) => state.pokemon.hasError;

export const selectFavoritesList = createSelector(
    selectPokemonList,
    list => list.filter(item => item.liked)
);

export default pokemonSlice.reducer;