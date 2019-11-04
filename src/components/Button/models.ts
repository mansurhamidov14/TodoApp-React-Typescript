import {colorVariants} from "../../enums/colorVariants";

export interface IButtonProps {
    block?: boolean;
    disabled?: boolean;
    variant: colorVariants;
    title: string;
    onClick?: () => void;
}
