/**
 * Created by Denis on 02.12.2017.
 */
import * as actions from "../constants/constants"
const initialState = {data: {}, stage: {loading: true}};

export function reducer(state = initialState,action){
    console.log(action.type);
    switch(action.type){
        case actions.DATA_LOADING:
            return {...state,stage: {loading: true, name: action.result.name}};
        case actions.DATA_LOADED:
            return {...state,data: action.result.data, stage: {loading: false}};
        case actions.DATA_REJECTED:
            return {...state,stage: {loading: false,error: action.result.error,name: action.result.error}};
        default:
            return state;
    }
}