import React from 'react';
import styles from './Block.module.scss';
import { IBlockProps } from './models';

export const Block = (props: IBlockProps) => {
    const {
        bg,
        paddingHorizontal,
        paddingVertical,
        marginTop,
        marginBottom,
        textAlign,
        children,
    } = props;

    const classNames: string[] = [];

    if (bg) {
        classNames.push(styles[`bg-${bg}`]);
    }
    if (paddingHorizontal) {
        classNames.push(styles[`px-${paddingHorizontal}`]);
    }
    if (paddingVertical) {
        classNames.push(styles[`py-${paddingVertical}`]);
    }
    if (marginTop) {
        classNames.push(styles[`mt-${marginTop}`]);
    }
    if (marginBottom) {
        classNames.push(styles[`mb-${marginBottom}`]);
    }
    if (textAlign) {
        classNames.push(styles[`text-${textAlign}`]);
    }

    return (
        <div className={classNames.join(" ")}>
            {children}
        </div>
    )
};