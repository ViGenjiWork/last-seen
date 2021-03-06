const initialState = {
    items: [],
    isLoaded: false
}

const cartItems = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARTITEMS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default cartItems