import React from "react";

type InitialStateType = {
    isRu: boolean;
    isLight: boolean;
}

export const initialState = {
    isRu: true,
    isLight: false
};

export const ContextApp = React.createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});