import { EViewTypes } from "../../enums/EViewTypes";
import { EIndentionSizes } from "../../enums/EIndentionSizes";
import { ReactNode } from "react";

export interface IBlockProps {
    bg?: EViewTypes;
    paddingHorizontal?: EIndentionSizes;
    paddingVertical?: EIndentionSizes;
    marginTop?: EIndentionSizes;
    marginBottom?: EIndentionSizes;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    children?: ReactNode | null;
}