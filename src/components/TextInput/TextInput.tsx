import React from 'react';
import { ITextInputProps } from "./models";

export function TextInput (props: ITextInputProps) {

    return (
        <input {...props}/>
    )
}