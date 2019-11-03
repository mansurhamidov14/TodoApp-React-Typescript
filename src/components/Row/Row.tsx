import React from 'react';
import styles from './Row.module.scss';

export const Row: React.FC = ({children}) => {
    return (
        <div className={styles.row}>
            {children}
        </div>
    )
};