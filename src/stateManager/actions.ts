import { CHANGE_THEME, CHANGE_LANG } from './types';

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