import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './entities/root';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos', 'language', 'password', 'categories', 'expenses', 'page']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor};
