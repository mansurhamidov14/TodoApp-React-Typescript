import React from 'react';
import styles from './Alert.module.scss';
import {IAlertProps} from "./models";

export function Alert (props: IAlertProps) {
    const {
        isVisible,
        message,
        onClose,
        title,
        type,
    } = props;
    const classNames:Array<string> = [styles.alert, styles[`alert-${type}`]];
    if (isVisible) {
        classNames.push(styles.alert__visible);
    }
    return (
        <div className={classNames.join(" ")}>
            <button type="button" onClick={onClose} className={styles.alert__close_btn}>
                X
            </button>
            {
                title && (
                    <h4 className={styles.alert__title}>
                        {title}
                    </h4>
                )
            }
            <p className={styles.alert__message}>
                {message}
            </p>
        </div>
    )
}