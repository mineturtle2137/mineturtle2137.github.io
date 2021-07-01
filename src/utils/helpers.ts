import { ELIPSIS_LENGHT, PRODUCTS_STORAGE_KEY } from './constants';
import { ApiResponseType, SlideType } from './types';

export const mapResponseDataToSlideType = (responseData: ApiResponseType['data']): SlideType[] => {
    return (responseData || []).map((item) => {
        const { name, description, main_image, images, id } = item;

        return { name, description, main_image, images, id };
    });
};

export const getStoredProducts = (): SlideType[] => {
    const localStorageItems = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    return localStorageItems ? JSON.parse(localStorageItems) : [];
};

export const getRandomArrayItem = <T>(array: T[], blacklistItem?: T): T => {
    const items = [...new Set(array)].filter((item) => {
        return typeof item !== 'object'
            ? item !== blacklistItem
            : JSON.stringify(item) !== JSON.stringify(blacklistItem);
    });
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
};

export const getEllipsis = (text: string): string => {
    if (text.length <= ELIPSIS_LENGHT) return text;
    const txt = text.substring(0, ELIPSIS_LENGHT);
    const substring = txt[txt.length - 1].match(/\W/) ? txt.slice(0, -1) : txt;
    return `${substring}...`;
};

export const getTitleAndSubtitle = (text: string): { title: string; subtitle?: string } => {
    const txt = text.split(',');
    const title = txt.length == 1 ? text : txt[0];
    const subtitle = txt.length > 1 ? txt.slice(1).join('') : '';
    return { title, subtitle };
};
