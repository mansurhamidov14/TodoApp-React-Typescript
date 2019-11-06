import React from 'react';
import { ITextProps } from './models';
import styles from './Text.module.scss';
import { EViewTypes, ETextSizes } from '../../enums';

export const Text: React.FC<ITextProps> = ({
    children,
    variant = EViewTypes.dark,
    fontStyle,
    weight,
    decoration,
    size = ETextSizes.MD
}) => {
    const classNames: string[] = [styles[`text-size-${size}`], styles[`text-${variant}`]];
    if (fontStyle) {
        classNames.push(styles[`text-style-${fontStyle}`]);
    }
    if (weight) {
        classNames.push(styles[`text-${weight}`]);
    }
    if (decoration) {
        classNames.push(styles[`text-${decoration}`]);
    }

    return (
        <span className={classNames.join(" ")}>{children}</span>
    )
}