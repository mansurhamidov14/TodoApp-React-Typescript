import { ETodoActions } from "./actionTypes";

export interface ITodosStateProps {
    id: string;
    title: string;
    doneTime?: number;
    weekDays: number[];
}

export interface ITodoActionProps {
    type: ETodoActions;
    payload?: any;
}