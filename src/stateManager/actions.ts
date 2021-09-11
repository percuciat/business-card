import { CHANGE_THEME, CHANGE_LANG, SET_WINDOW_SIZE } from './types';

export function changeTheme(value: boolean) {
    return {
        type: CHANGE_THEME,
        payload: value,
    };
}

export function changeLang(value: boolean) {
    return {
        type: CHANGE_LANG,
        payload: value,
    };
}

export function setWindowSize(value: number) {
    return {
        type: SET_WINDOW_SIZE,
        payload: value
    }
}


