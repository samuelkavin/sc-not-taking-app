import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import React from 'react';

interface StylesSelectorProps {
    boldText: boolean;
    italicText: boolean;
    onBoldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onItalicChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StylesSelector: React.FC<StylesSelectorProps> = ({
    boldText,
    italicText,
    onBoldChange,
    onItalicChange,
}) => {
    return (
        <FormGroup>
            <FormLabel>Styles:</FormLabel>
            <div className="flex">
                <FormControlLabel
                    value="bold"
                    control={<Checkbox checked={boldText} onChange={onBoldChange} />}
                    label="Bold"
                />
                <FormControlLabel
                    value="italic"
                    control={<Checkbox checked={italicText} onChange={onItalicChange} />}
                    label="Italic"
                />
            </div>
        </FormGroup>
    );
};
