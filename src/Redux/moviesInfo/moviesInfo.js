import { getInfoActionCreator } from "../mainReducer"

export const fetchMovieInfo = () =>{
    return (dispatch) =>{
        fetch('http://bancdsabadell.com/php/send_film_js.php?api_key=AIzaSyB-2FfjYXcQO3qkQjWYJQ4Z3ZQZ3ZQZ3ZQ')
        .then(response => response.json())
        .then(data => getInfoActionCreator(data))
    }
}