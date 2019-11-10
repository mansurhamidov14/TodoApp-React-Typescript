import { ITodosStateProps, ITodoActionProps } from "./interfaces";
import { ETodoActions } from "./actionTypes";

const initialState: ITodosStateProps[] = [];

export const todos = (state: ITodosStateProps[] = initialState, action: ITodoActionProps): ITodosStateProps[] => {
    switch (action.type) {
        case ETodoActions.ADD_TODO:
            return [
                ...state,
                action.payload
            ];
        case ETodoActions.UPDATE_TODO:
            return state.map((todo: ITodosStateProps): ITodosStateProps => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        ...action.payload
                    }
                } else {
                    return todo;
                }
            });
        case ETodoActions.REMOVE_TODO:
            return state.filter((todo: ITodosStateProps): boolean => {
                return todo.id !== action.payload.id
            });
        default: return state;
    }
} 