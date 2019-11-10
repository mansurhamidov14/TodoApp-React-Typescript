import { EViewTypes } from "../../enums";

export interface ICheckBoxProps {
    checked: boolean;
    onCheck?: () => void;
    label?: string;
    viewType: EViewTypes;
    disabled?: boolean;
    id?: string;
}

