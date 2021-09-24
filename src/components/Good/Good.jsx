import React from 'react'

import { Button } from '../Button/Button';
import ProductSlider from '../ProductSlider/ProductSlider';
import { Context } from '../../context';

import './Good.scss'

export const Good = ({ id, title, price, imageURL, images, total, description, sizes }) => {

    const [activeSize, setActiveSize] = React.useState(sizes[0])
    const {addCartItem} = React.useContext(Context)
    const item = { id, title, price, imageURL, activeSize }

    const priceSpacing = price => {
        return (String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 '))
    }


    return (
        <div className='good-wrapper' data-id={id}>
            <div className="slider">
                <ProductSlider
                    images={images}
                />
            </div>
            <div className="info">
                <h1 className='title'>{title}</h1>
                <p className='price'>{priceSpacing(price)} Руб.</p>
                <div className="chooseSize">
                    <select value={activeSize} onChange={(e) => setActiveSize(e.target.value)}>
                        {sizes && sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <Button
                    onClick={() => addCartItem(item)}
                    children='В корзину'
                />
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

