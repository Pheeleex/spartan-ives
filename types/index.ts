import { Dispatch, SetStateAction } from "react";

export interface Property {
    id: string;
    ImagePath?: string;
    ProjectName?: string;
    Furnishing?: string
    ProjectAmount?: number;
    ProjectType?: string;
    Location?: string;
    State?: string;
    Service?: string
    Bedroom?: number;
    About?: string;
    images?: string[];
    imageFiles?: File[];
}

export type SetProperties = Dispatch<SetStateAction<Property[]>>;