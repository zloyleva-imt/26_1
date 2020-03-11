import {SET_WS} from "../constants";

const initState = null;

const reducer = (state=initState, {type, payload}) => {

    switch (type) {
        case SET_WS:
            console.log('payload',payload)
            return {
                ...payload
            };
        default:
            return{
                ...state
            }
    }
};

export default reducer;