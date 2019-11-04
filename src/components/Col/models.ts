import { ReactNode } from "react";

export interface IColProps {
    size?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    children?: ReactNode | null;
}