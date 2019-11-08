import React from 'react';
import { EViewTypes } from '../../enums';
import styles from './CheckBox.module.scss';

interface ICheckBoxProps {
    checked: boolean;
    onCheck?: () => void;
    label?: string;
    viewType: EViewTypes;
    disabled?: boolean;
    id?: string;
}

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
                { label && <span className={styles.checkbox__label}>{label}</span>}
            </label>
        </div>
    )
}