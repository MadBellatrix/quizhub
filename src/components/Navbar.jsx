import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className=" bg-amber-100 rounded-xl shadow-md py-3 px-6 flex justify-end items-center">
            <ul className="flex flex-row gap-4">
                <li>
                    <Link
                        to="/"
                        className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-lime-700 transition-colors duration-200"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/highscores"
                        className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-lime-700 transition-colors duration-200"
                    >
                        Highscores
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-lime-700 transition-colors duration-200"
                    >
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
