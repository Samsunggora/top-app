import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import rating from "./Rating";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}