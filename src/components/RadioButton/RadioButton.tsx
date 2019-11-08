import React from 'react';
import { ERadioViewTypes } from '../../enums';
import styles from './RadioButton.module.scss';

interface IRadioButtonProps {
    checked: boolean;
    onCheck: () => void;
    id?: string;
    viewType: ERadioViewTypes;
    disabled?: boolean;
    label: string;
}

export const RadioButton: React.FC<IRadioButtonProps> = ({
    checked,
    onCheck,
    id,
    viewType,
    disabled,
    label,
}) => {
    return (
        <div className={styles.radio}>
            <label>
                <input 
                    type="radio"
                    id={id}
                    checked={checked}
                    onChange={onCheck}
                    disabled={disabled}
                    className={styles.radio__button}
                />
                <span className={[styles[`radio__input`], styles[`radio__input-${viewType}`]].join(" ")}/>
                <span className={styles.radio__label}>{label}</span>
            </label>
        </div>
    )
}
