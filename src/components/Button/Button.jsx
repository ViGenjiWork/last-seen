import React from 'react'
import './Button.scss'

export const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="btn"
            type="submit"
        >
            {children}
        </button>
    )
}
