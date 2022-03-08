import { DATASUCCESS, LOADING, FILTER } from '../types'

const initialState = {
    data: []
}
export const dataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case DATASUCCESS:
            return ({...state, data: payload })
        case FILTER:
            return ({
                ...state,
                data: state.data.filter((product) => product.title.includes(payload))
            })
        default:
            return state;
    }
}

export const loader = (state = initialState, { type }) => {
    switch (type) {
        case LOADING:
            return true


        default:
            return false;
    }
}