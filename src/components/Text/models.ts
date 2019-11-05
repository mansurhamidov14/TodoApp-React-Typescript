import { ETextSizes } from "../../enums/ETextSizes";
import { EViewTypes } from "../../enums/EViewTypes";

export interface ITextProps {
    size?: ETextSizes;
    variant?: EViewTypes;
    children: any;
    decoration?: 'none' | 'underline' | 'overline' | 'line-through';
    weight?: 'bold' | 'bolder' | 'normal';
    fontStyle?: 'normal' | 'italic' | 'oblique';
}