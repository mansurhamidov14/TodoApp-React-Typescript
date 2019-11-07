import { ChangeEvent } from "react";

export interface ISwithcerProps {
    isChecked: boolean;
    isDisabled?: boolean;
    id?: string;
    name?: string;
    onSwitch: (event?: ChangeEvent<HTMLInputElement>) => void;
}
