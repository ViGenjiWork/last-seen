import React from 'react'

import "./Cart.scss"

export const Cart = ({
    opened = false,
    onCloseCart,
    items,
    removeCartItem
}) => {

    return (
        <React.Fragment>

            <div className={`overlay ${opened ? 'overlayVisible' : ''}`} onClick={(e => {
                if (e.target.classList.contains('overlay')) {
                    onCloseCart()
                }
            })}>
                <div className="cart">
                    <h2>Корзина</h2>
                    {items && items.map(item => (
                        <div key={item.id} className="cart-item">
                            <img className='cart-item__image' width={200} src={item.imageURL} alt="product in cart" />
                            <div className="cart-item__info">
                                <p className='cart-item__info-title'>
                                    {item.title}
                                    &nbsp;
                                    <span>( {item.activeSize} )</span>
                                </p>
                                <p className='cart-item__info-price'>{item.price} Руб.</p>
                            </div>
                            <div className="close-btn">
                                <img
                                    src="./../images/btn-remove.svg"
                                    alt=""
                                    onClick={() => removeCartItem(item.id)}
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </React.Fragment>

    )
}
