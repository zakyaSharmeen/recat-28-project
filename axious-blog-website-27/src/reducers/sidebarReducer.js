import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../utils/constants";


// defining the reducer function
const sidebarReducer = (state, action) => {
    switch(action.type){
        case OPEN_SIDEBAR: 
            return {
                ...state,
                isSidebarOpen: true
            }
        case CLOSE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: false
            }
        default:
            return state;
    }
}

export default sidebarReducer;