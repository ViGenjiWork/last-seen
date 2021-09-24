import React from 'react'

import { Link } from 'react-router-dom'

import './Card.scss'

export const Card = ({ id, title, imageURL, hoverImageURL, price, total }) => {

    const priceSpacing = price => {
        return (String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 '))
    }

    const titleToURL = (title) => {
        return title.split(' ').join('-')
    }

    return (
        <Link to={`/products/${titleToURL(title)}`}>
            <div className="card" data-id={id}>
                <div className="image">
                    <img
                        src={imageURL}
                        alt={title}
                        onMouseOver={e => e.currentTarget.src = hoverImageURL}
                        onMouseOut={e => e.currentTarget.src = imageURL}
                    />
                    {total === 0 ? <div className="status">Продано</div> : null}
                </div>
                <div className="info">
                    <div className="title">{title}</div>
                    <div className="price">{priceSpacing(price)} ₽</div>
                </div>
            </div>
        </Link>
    )
}
