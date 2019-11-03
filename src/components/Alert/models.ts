export enum alertTypes {
    success = 'success',
    danger = 'danger',
    info = 'info',
    primary = 'primary',
    warning = 'warning',
    light = 'light',
    dark = 'dark'
}

export interface IAlertProps {
    isVisible?: boolean;
    message: string;
    onClose?: () => void;
    title?: string;
    type: alertTypes;
}