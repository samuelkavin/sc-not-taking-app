import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

interface ColorSelectorProps {
    color: string;
    onColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ color, onColorChange }) => {
    return (
        <FormControl>
            <FormLabel>Color:</FormLabel>
            <RadioGroup
                value={color}
                onChange={onColorChange}
                name="radio-buttons-group"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}>
                <FormControlLabel value="black" control={<Radio />} label="Black" />
                <FormControlLabel value="orange" control={<Radio />} label="Orange" />
                <FormControlLabel value="green" control={<Radio />} label="Green" />
            </RadioGroup>
        </FormControl>
    );
};
