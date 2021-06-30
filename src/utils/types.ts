import { Direction } from './constants';

export type Id = string | number;

export type SlideType = {
    id: Id;
    name: string;
    description: string;
    main_image: string;
    images: string[];
};

export type ApiItem = {
    [key: string]: any;
};

export type ApiResponseType = {
    [key: string]: any;
    data: ApiItem[];
};
