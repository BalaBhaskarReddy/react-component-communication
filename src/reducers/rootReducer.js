
const initialState = {
    title:'placeholder title'
};

const rootReducer = (state=initialState, action) => {
    let newState = state;
    if(action.type === 'SAME') {
        newState = {
            title:'SAME WORLD'
        }
    }

    if(action.type === 'CHANGE') {
        newState = {
            title:'CHANGE WORLD'
        }
    }
    return newState;
}

export default rootReducer;