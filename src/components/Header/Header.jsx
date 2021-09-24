import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'


export const Header = ({ onCLickCart }) => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"><img src="./../images/logo.jpg" alt="Logo" /></Link></li>
                    <li><Link to="/ru">Russian</Link>&nbsp;/&nbsp;<Link to="/en">English</Link></li>
                    <li onClick={onCLickCart} style={{ marginTop: "10px" }}>Cart</li>
                </ul>
            </nav>
        </header >
    )
}
