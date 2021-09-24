
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../components/Card/Card'
import { fetchProducts } from '../redux/actions/products'


export const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector(({ products }) => products.items)
    // const isLoaded = useSelector(({products}) => products.isLoaded)

    React.useEffect(() => {
        dispatch(fetchProducts)
    }, [dispatch])

    return (
        <div className="productsList">
            {items && items.map((good) => (
                <Card
                    key={good.id}
                    {...good}
                />
            ))}
        </div>
    )
}
