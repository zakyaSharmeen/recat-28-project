import React, { createContext, useContext, useReducer} from "react";
import reducer from "../reducers/sidebarReducer";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../utils/constants";


const initialState = {
    isSidebarOpen: false
}

const SidebarContext = createContext();

export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR});
    }

    const closeSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR});
    }

    return (
        <SidebarContext.Provider value = {{
            ...state,
            openSidebar,
            closeSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}


// custome hook
export const useSidebarContext = () => {
    return useContext(SidebarContext);
}