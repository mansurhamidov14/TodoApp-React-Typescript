import React from 'react';
import styles from './RadioButton.module.scss';
import { IRadioButtonProps } from './models';

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
                {label && <span className={styles.radio__label} style={disabled ? {cursor: 'not-allowed'} : undefined}>{label}</span>}
            </label>
        </div>
    )
}
