/**
 * Created by Denis on 02.12.2017.
 */
import * as actions from "../constants/constants"
const initialState = {data: {}, stage: {title: "LOADING"}};

export function reducer(state = initialState,action){
    console.log(action.type);
    switch(action.type){
        case actions.DATA_LOADING:
            return {...state,stage: {title: "LOADING", name: action.result.name}};
        case actions.DATA_LOADED:
            return {...state,data: action.result.data, stage: {title: "SUCCESS"}};
        case actions.DATA_REJECTED:
            return {...state,stage: {title: "ERROR",error: action.result.error,name: action.result.error}};
        default:
            return state;
    }
}