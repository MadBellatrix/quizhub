import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul className='flex flex-row gap-4'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Kontakt</Link>
                </li>
                <li>
                    <Link to="/highscores">Highscores</Link>
                </li>
            </ul>
        </nav>
    )
}
