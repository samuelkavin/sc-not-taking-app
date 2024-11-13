import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

export default function TaskList() {
    const tasks = useTasks();
    return (
        <ul className="font-sans first-letter:uppercase">
            {tasks.length === 0 ? (
                <li className="text-center ">
                    <p className="text-lg font-bold">No notes added yet</p>
                    <p className="text-xs font-light italic">Add a note to get started</p>
                </li>
            ) : (
                tasks.map((task) => (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                ))
            )}
        </ul>
    );
}

function Task({ task }: any) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    const isChecked = task.done;

    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value,
                            },
                        });
                    }}
                />
            </>
        );
    } else {
        taskContent = <>{task.text}</>;
    }

    const showButtons = isEditing ? (
        <DoneIcon
            onClick={() => setIsEditing(false)}
            sx={{ color: '#c2c0c0', cursor: 'pointer' }}
        />
    ) : (
        <EditIcon onClick={() => setIsEditing(true)} sx={{ color: '#c2c0c0', cursor: 'pointer' }} />
    );

    return (
        <label className="flex items-center">
            <div
                style={{
                    color: task.color,
                    fontWeight: task.bold ? 'bold' : 'normal',
                    fontStyle: task.italic ? 'italic' : 'normal',
                }}
                className={`flex w-full items-center`}>
                <Checkbox
                    checked={task.done}
                    onChange={(e) => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                done: e.target.checked,
                            },
                        });
                    }}
                />
                {taskContent}
            </div>

            <div className="flex gap-2">
                {showButtons}
                <DeleteIcon
                    onClick={() => {
                        dispatch({
                            type: 'deleted',
                            id: task.id,
                        });
                    }}
                    sx={{ color: '#c2c0c0', cursor: 'pointer' }}
                />
            </div>
        </label>
    );
}
