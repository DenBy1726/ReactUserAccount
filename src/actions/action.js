/**
 * Created by Denis on 02.12.2017.
 */
import * as action from "../constants/constants"
export function upload(login){
    return function(dispatch){
        dispatch(uploadBegin(login));
        fetch(`https://api.github.com/users/${login}`).then(
            response => {
                response.json().then(data => {
                    dispatch(uploadEndSuccess(data));
                });
        },
            error =>{
                dispatch(uploadEndError(login,error));
            }
        );
    }
}

function uploadBegin(name){
    return {
        type: action.DATA_LOADING,
        result:{
            name
        }
    }
}

function uploadEndSuccess(data){
    return {
        type: action.DATA_LOADED,
        result:{
            data
        }
    }
}

function uploadEndError(name,error){
    return {
        type: action.DATA_REJECTED,
        result:{
            name,error
        }
    }
}