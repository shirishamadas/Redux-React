// reducer return state
const initialState = {
    numberOfCars: 10,
    loading: false,
    errrorMsg: false,
    userId: [],
}

const reducer = (state = initialState, action) => { // return new state everytime
    console.log(action, 'action');
    switch(action.type) {
        case 'SELLCAR':
            return { ...state, numberOfCars: state.numberOfCars - 1 };

        case 'RESTORE':
            return { ...state, numberOfCars: state.numberOfCars + 10 };

        case 'SUCCESS':
            return { ...state, userId: action.payload, loading: false, errorMsg: false };

        case 'LOADING':
            return { ...state, loading: true };

        case 'ERROR':
            return {  ...state, errorMsg: true };

        default: 
            return state;
    }
}

export default reducer;