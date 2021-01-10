import { CHANGE_THEME, CHANGE_LANG } from './types';

export const changeReducer = (state: any, action: { type: string; payload: boolean; })  => {
    switch(action.type) {
        case CHANGE_LANG:
            return {
                ...state,
                isRu: action.payload
            };
        case CHANGE_THEME:
            return {
                ...state,
                isLight: action.payload
            };
        default:
            return state
    }
};
