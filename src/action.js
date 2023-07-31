import axios from "axios"
export const sellCar = () => { // return object every time
    return { type: 'SELLCAR' }
}
export const restoreCar = () => {
    return { type: 'RESTORE' }
}
export const fetchUser = () => {
    return (dispatch) => {
    dispatch(loading()) // redux thunk- dispatching an action in another action
    axios.get('https://jsonplaceholder.typicode.com/posts') // calling API
    .then(response=>{
        console.log(response.data);
        dispatch(successMsg(response.data))
    })
    .catch(error=>{
        console.log(error);
        dispatch(errorMsg())
    });
    }
}
export const successMsg = (id) => {
    return { 
        type: 'SUCCESS',
        payload: id
    }
}
export const loading = () => {
    return { type: 'LOADING'}
}
export const errorMsg = () => {
    return { type: 'ERROR'}
}