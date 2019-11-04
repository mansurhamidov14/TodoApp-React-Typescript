import React from 'react';
import styles from './Container.module.scss';
import { IContainerProps } from './models';

export const Container = (props: IContainerProps) => {
    const {
        children,
        fluid,
    } = props;
    
    return (
        <div className={fluid ? styles.container : styles['container-fluid']}>
            {children}
        </div>
    )
}