import { colorVariants } from "../../enums/colorVariants";
import { indentionSizes } from "../../enums/indentionSizes";
import { ReactNode } from "react";

export interface IBlockProps {
    bg?: colorVariants;
    paddingHorizontal?: indentionSizes;
    paddingVertical?: indentionSizes;
    marginTop?: indentionSizes;
    marginBottom?: indentionSizes;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    children?: ReactNode | null;
}