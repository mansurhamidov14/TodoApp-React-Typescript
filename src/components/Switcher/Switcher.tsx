import React, {ChangeEvent} from 'react';
import styles from './Switcher.module.scss';

interface ISwithcerProps {
    isActive: boolean;
    onSwitch: (event?: ChangeEvent<HTMLInputElement>) => void;
}

export const Switcher: React.FC<ISwithcerProps> = ({isActive, onSwitch}) => {
    return (
        <div className={styles.switcher}>
            <label>
                <input type="checkbox" className={styles.switcher__checkbox} checked={isActive} onChange={onSwitch}/>
                <span className={styles.switcher__status}>
                    <span className={styles.switcher__status__on}>&#10004;</span>
                    <span className={styles.switcher__status__off}/>
                    <span className={styles.switcher__status__main}></span>
                </span>
            </label>
        </div>
    )
}
