import React from "react";
import styles from './Col.module.scss'
import { IColProps } from "./models";

export const Col = (props: IColProps) => {
    const {
        children,
        size = 12,
        xl,
        lg,
        md,
        sm
    } = props;
    const classNames: string[] = [styles[`col-${size}`]];
    if (sm) {
        classNames.push(styles[`col-sm-${sm}`]);
    }
    if (md) {
        classNames.push(styles[`col-md-${md}`]);
    }
    if (lg) {
        classNames.push(styles[`col-lg-${lg}`]);
    }
    if (xl) {
        classNames.push(styles[`col-xl-${xl}`]);
    }

    return (
        <div className={classNames.join(" ")}>
            {children || null}
        </div>
    )
};