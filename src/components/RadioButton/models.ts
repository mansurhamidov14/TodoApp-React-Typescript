import { ERadioViewTypes } from "../../enums";

export interface IRadioButtonProps {
    checked: boolean;
    onCheck: () => void;
    id?: string;
    viewType: ERadioViewTypes;
    disabled?: boolean;
    label?: string;
}