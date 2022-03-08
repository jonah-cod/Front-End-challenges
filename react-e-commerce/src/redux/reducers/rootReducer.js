import { combineReducers } from 'redux';
import { dataReducer, loader } from './dataReducer';

export const reducers = combineReducers({
    allProducts: dataReducer,
    loading: loader

})