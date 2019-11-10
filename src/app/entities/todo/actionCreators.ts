import { ITodosStateProps, ITodoActionProps } from "./interfaces"
import { ETodoActions } from "./actionTypes"

export const addTodo = (payload: ITodosStateProps): ITodoActionProps => {
    return {
        type: ETodoActions.ADD_TODO,
        payload
    }
}

export const updateTodo = (payload: Partial<ITodosStateProps>): ITodoActionProps => {
    return {
        type: ETodoActions.UPDATE_TODO,
        payload
    }
}

export const removeTodo = (id: string): ITodoActionProps => {
    return {
        type: ETodoActions.REMOVE_TODO,
        payload: {
            id
        }
    }
}