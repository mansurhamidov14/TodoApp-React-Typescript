import {EViewTypes} from "../../enums/EViewTypes";

export interface IButtonProps {
    block?: boolean;
    disabled?: boolean;
    variant: EViewTypes;
    title: string;
    onClick?: () => void;
}
