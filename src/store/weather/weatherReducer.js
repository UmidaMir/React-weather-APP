import { GET_WEATHER, SET_LOADING } from "./weatherActions";


const initialState = {
    list: [],
    loading: true,
    error: null
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                list: action.payload
            }
            break;
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
            break;
    }
}