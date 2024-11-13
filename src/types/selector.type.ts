export interface StylesSelectorProps {
    boldText: boolean;
    italicText: boolean;
    onBoldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onItalicChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ColorSelectorProps {
    color: string;
    onColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
