import { Appearance } from 'react-native';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface InitialState {
    theme: string;
}

const initialState: InitialState = {
    theme: Appearance.getColorScheme() || 'light'
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        }
    },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = globalSlice.actions;

// Selectors
export const selectAppTheme = (state: RootState) => state.global.theme;

export default globalSlice.reducer;