import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const setProducts = items => ({
    type: 'SET_PRODUCTS',
    payload: items,
})

export const fetchProducts = dispatch => {
    dispatch(setLoaded(false))
    axios.get('https://6112f8ba89c6d00017ac0605.mockapi.io/goods')
        .then(({ data }) => dispatch(setProducts(data)))
}

