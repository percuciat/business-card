import React, {useContext, useCallback} from "react";
import {ContextApp} from "../stateManager/store";
import {setWindowSize} from "../stateManager/actions";

export const useResizeWindow = () => {
    const {dispatch} = useContext(ContextApp);
    const handleSubscribe = useCallback(() => {
        dispatch(setWindowSize(window.innerWidth))
    }, []);
    React.useEffect(() => {
        window.addEventListener('resize', handleSubscribe);
        return () => window.removeEventListener('resize', handleSubscribe)
    }, [])
};