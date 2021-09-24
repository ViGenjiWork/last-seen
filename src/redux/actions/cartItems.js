import axios from "axios"

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const setCartItems = items => ({
    type: 'SET_CARTITEMS',
    payload: items,
})

export const fetchCartItems = dispatch => {
    dispatch(setLoaded(false))
    axios.get('https://6112f8ba89c6d00017ac0605.mockapi.io/cartItems')
        .then(({ data }) => dispatch(setCartItems(data)))
}
