import { PayloadAction, createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';

import { Pokemon } from '../utils/types';
import { pokemonApi } from '../API/pokemonApi';
import { RootState } from './store';

export interface InitialState {
    currentPage: number;
    isFetching: boolean;
    list: Pokemon[];
    isDone: boolean;
    hasError: boolean;
    capturedList: { [key: string]: Pokemon; };
}

const initialState: InitialState = {
    list: [],
    isFetching: false,
    currentPage: 1,
    isDone: false,
    hasError: false,
    capturedList: {}
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        capturePokemon: (state, { payload: pokemon }: PayloadAction<Pokemon>) => {
            state.capturedList[pokemon.name] = { ...pokemon, captured: true };
        },
        releasePokemon: (state, { payload: pokemon }: PayloadAction<Pokemon>) => {
            delete state.capturedList[pokemon.name];
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAllPokemons.fulfilled, (state, { payload }) => {
            const { done, result } = payload;
            state.isFetching = false;
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
        });
    }
});

// Action creators are generated for each case reducer function
export const { capturePokemon, releasePokemon } = pokemonSlice.actions;

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
    (state: RootState) => state.pokemon.capturedList,
    list => Object.values(list)
);

export const selectSearchResults = (results: Pokemon[]) => createSelector(
    (state: RootState) => state.pokemon.capturedList,
    list => results.map(item => ({ ...item, captured: !!list[item.name] }))
);

export const selectIsCaptured = (name: string) => createSelector(
    (state: RootState) => state.pokemon.capturedList,
    list => !!list[name]
);

export default pokemonSlice.reducer;