import {colorVariants} from "../../enums/colorVariants";

export interface IAlertProps {
    isVisible?: boolean;
    message: string;
    onClose?: () => void;
    title?: string;
    variant: colorVariants;
}
