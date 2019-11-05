import React from 'react';
import { IBadgeProps } from './IBadgeProps';
import styles from './Badge.module.scss';

export const Badge: React.FC<IBadgeProps> = ({
    variant,
    text,
}) => {
    return (
        <span className={[styles.badge, styles[`badge-${variant}`]].join(" ")}>{text}</span>
    )
}