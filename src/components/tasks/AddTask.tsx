import { useState } from 'react';
import { useTasksDispatch } from './TasksContext';
import { ColorSelector } from '../color-selector/ColorSelector';
import { StylesSelector } from '../styles-selector/StylesSelector';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddTask() {
    const [text, setText] = useState<string>('');
    const [color, setColor] = useState<string>('black');
    const [boldText, setBoldText] = useState<boolean>(false);
    const [italicText, setItalicText] = useState<boolean>(false);

    const dispatch = useTasksDispatch();
    const nextId = Math.floor(Math.random() * 10000);

    return (
        <>
            <div className="mb-4 w-full text-center">
                <TextField
                    focused
                    id="add-note"
                    placeholder="Add notes"
                    variant="outlined"
                    value={text}
                    className="w-full"
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="flex flex-col text-left mb-4">
                <StylesSelector
                    boldText={boldText}
                    italicText={italicText}
                    onBoldChange={(e) => setBoldText(e.target.checked)}
                    onItalicChange={(e) => setItalicText(e.target.checked)}
                />
            </div>

            <div className="flex flex-col text-left mb-4">
                <ColorSelector color={color} onColorChange={(e) => setColor(e.target.value)} />
            </div>

            <Button
                variant="contained"
                className="w-full h-[2rem]"
                disabled={!text}
                onClick={() => {
                    setText('');
                    dispatch({
                        type: 'added',
                        id: nextId,
                        text: text,
                        color: color,
                        bold: boldText,
                        italic: italicText,
                    });
                }}>
                Add Note
            </Button>
        </>
    );
}
