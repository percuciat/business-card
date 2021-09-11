import React from "react";

type InitialStateType = {
    isRu: boolean;
    isLight: boolean;
    width: number;
}

export const initialState = {
    isRu: true,
    isLight: false,
    width: window.innerWidth
};

export const ContextApp = React.createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});