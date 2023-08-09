import axios from "axios";

const GET_INFO_MOVIE = 'GET_INFO_MOVIE'



const mainReducer = async (state, action) => {

    // console.log(state);

    switch (action.type) {
        case GET_INFO_MOVIE:
            console.log(action);
            return state = action;
        default: return state;
    }
}
 
export const getInfoActionCreator = (obj)=>{
    return({
        type: GET_INFO_MOVIE,
        info: obj
    })
}



export default mainReducer