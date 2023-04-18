import { getPersistConfig } from 'redux-deep-persist';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const persistConfig = getPersistConfig({
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['pokemon.hasError'],
    rootReducer: reducers
});


const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            warnAfter: 128,
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        immutableCheck: { warnAfter: 128 },
    })
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
