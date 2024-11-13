import { createContext, useContext, useReducer, useEffect } from 'react';
import { Action, TasksState, Dispatch, TasksProviderProps } from 'types/task.types';

const TasksContext = createContext<TasksState | undefined>(undefined);
const TasksDispatchContext = createContext<Dispatch | undefined>(undefined);
const LOCAL_STORAGE_KEY = 'tasks';

export function TasksProvider({ children }: TasksProviderProps): JSX.Element {
    const [tasks, dispatch] = useReducer(tasksReducer, [], (initial) => {
        const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedTasks ? JSON.parse(storedTasks) : initial;
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export function useTasks(): TasksState {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasks must be used within a TasksProvider');
    }
    return context;
}

export function useTasksDispatch(): Dispatch {
    const context = useContext(TasksDispatchContext);
    if (!context) {
        throw new Error('useTasksDispatch must be used within a TasksProvider');
    }
    return context;
}

function tasksReducer(tasks: TasksState, action: Action): TasksState {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    color: action.color,
                    bold: action.bold,
                    italic: action.italic,
                    done: false,
                },
            ];
        }
        case 'changed': {
            return tasks.map((t) => (t.id === action.task.id ? action.task : t));
        }
        case 'deleted': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw new Error('Unknown action type');
        }
    }
}
