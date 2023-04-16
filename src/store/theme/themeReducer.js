import { SET_THEME } from "./themeActions";


export const themeReducer = (state = 'light', action) => {
    switch (action.type) {
        case SET_THEME:
            return action.payload
            break;
        default:
            return state
            break;
    }
}