import axios from 'axios'
import React from 'react'
import { Good } from './../components/Good/Good';

export const Product = () => {

    const [item, setItem] = React.useState([])
    // const [loaded, setLoaded] = React.useState(false)

    const dbSearch = document.location.pathname.substring(10).split('-').join(' ')

    React.useEffect(() => {

        (async () => {
            try {
                const [itemResponse] = await Promise.all([
                    axios.get(`https://6112f8ba89c6d00017ac0605.mockapi.io/product-page?search=${dbSearch}`)
                ])
                // setLoaded(true)
                setItem(itemResponse.data)
            } catch (e) {
                console.log(e);
            }

        })()

    }, [dbSearch])

    return (
        <div>
            {item.map(good => (
                <Good
                    key={good.id}
                    {...good}
                />
            ))}
        </div>
    )
}
