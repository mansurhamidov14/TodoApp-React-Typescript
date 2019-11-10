import { combineReducers } from 'redux';
import { todos } from './todo/todoReducer';

export const rootReducer = combineReducers({
    todos
});

export type AppState = ReturnType<typeof rootReducer>;
