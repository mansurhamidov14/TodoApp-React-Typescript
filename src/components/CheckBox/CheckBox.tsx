import React from 'react';
import styles from './CheckBox.module.scss';
import { ICheckBoxProps } from './models';

export const CheckBox: React.FC<ICheckBoxProps> = ({
    checked,
    onCheck,
    label,
    viewType,
    disabled,
    id,
}) => {
    return (
        <div className={styles.checkbox}>
            <label htmlFor={id}>
                <input type="checkbox" id={id} onChange={onCheck} disabled={disabled} checked={checked}/>
                <span className={[styles.checkbox__input, styles[`checkbox__input-${viewType}`]].join(" ")} />
                { label && <span className={styles.checkbox__label} style={disabled ? {cursor: 'not-allowed'} : undefined}>{label}</span>}
            </label>
        </div>
    )
}