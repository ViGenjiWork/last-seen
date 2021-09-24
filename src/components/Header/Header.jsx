import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import logo from './../../assets/images/logo.jpg'


export const Header = ({ onCLickCart }) => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/last-seen"><img src={logo} alt="Logo" /></Link></li>
                    <li onClick={onCLickCart} style={{ marginTop: "10px" }}>Cart</li>
                </ul>
            </nav>
        </header >
    )
}
