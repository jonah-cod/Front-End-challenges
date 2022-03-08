import { DATASUCCESS, LOADING, FILTER } from '../types';

export const datasuccess = (data) => {
    return ({
        type: DATASUCCESS,
        payload: data
    })
}

export const loading = () => {
    return {
        type: LOADING,
        payload: null
    }
}

export const filtering = (text) => {
    return {
        type: FILTER,
        payload: text
    }
}