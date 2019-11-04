import React from 'react';
import {IButtonProps} from "./models";
import styles from './Button.module.scss'

export const Button = (props: IButtonProps) => {
    const {
        title,
        variant,
        onClick,
        block,
        disabled,
    } = props;
    const classNames = [styles.btn, styles[`btn-${variant}`]];
    if (disabled) {
        classNames.push(styles.disabled);
    }
    if (block) {
        classNames.push(styles[`btn-block`]);
    }
    return (
        <button className={classNames.join(" ")} onClick={onClick} disabled={disabled}>{title}</button>
    )
}
