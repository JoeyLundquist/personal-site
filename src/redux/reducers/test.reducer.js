

export const testReducer = (state = {name: "Joey"}, action) => {
    switch (action.type){
        case 'TEST_REDUCER_WORKS':
            return 'THIS IS IT'
        default:
            return state;
    }
}