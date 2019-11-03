import { ChangeEvent } from "react";

export interface ITextInputProps {
    disabled?: boolean | undefined;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean | undefined;
    type: 'text' | 'email' | 'number';
    value: string;
    className?: string | undefined;
}