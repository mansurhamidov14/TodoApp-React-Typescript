import React from 'react';
import styles from './Switcher.module.scss';
import { ISwithcerProps } from './models';

export const Switcher: React.FC<ISwithcerProps> = ({ isChecked, onSwitch, isDisabled, id, name }) => {
    return (
        <div className={styles.switcher}>
            <label htmlFor={id}>
                <input 
                    type="checkbox" 
                    id={id}
                    name={name}
                    className={styles.switcher__checkbox} 
                    checked={isChecked}
                    onChange={onSwitch} 
                    disabled={isDisabled}/>
                <span className={styles.switcher__status}>
                    <span className={styles.switcher__status__on}/>
                    <span className={styles.switcher__status__off}/>
                    <span className={styles.switcher__status__main}/>
                </span>
            </label>
        </div>
    )
}
