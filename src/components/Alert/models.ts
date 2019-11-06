import { EViewTypes } from "../../enums/EViewTypes";

export interface IAlertProps {
    isVisible?: boolean;
    message: string;
    onClose?: () => void;
    title?: string;
    variant: EViewTypes;
}
