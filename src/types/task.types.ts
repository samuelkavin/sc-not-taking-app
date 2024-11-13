import { ReactNode } from 'react';

export interface Task {
    id: number;
    text: string;
    color: string;
    bold: boolean;
    italic: boolean;
    done: boolean;
}

export type TasksState = Task[];

export type Action =
    | { type: 'added'; id: number; text: string; color: string; bold: boolean; italic: boolean }
    | { type: 'changed'; task: Task }
    | { type: 'deleted'; id: number };

export type Dispatch = (action: Action) => void;

export interface TasksProviderProps {
    children: ReactNode;
}
