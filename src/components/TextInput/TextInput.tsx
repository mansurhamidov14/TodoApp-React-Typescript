import React from 'react';
import { ITextInputProps } from './models';
import styles from './TextInput.module.scss'

export function TextInput (props: ITextInputProps) {
    const {
        id,
        label,
        ...rest
    } = props;
    const classNames: string[] = !props.value.length ? [styles.text_input__input] : [styles.text_input__input, styles.filled];
    
    return (
        <div className={styles.text_input}>
            <input id={id} {...rest} className={classNames.join(" ")} autoComplete={"off"}/>
            {label && <label htmlFor={id} className={styles.text_input__label}>{label}</label>}
        </div>

    )
}