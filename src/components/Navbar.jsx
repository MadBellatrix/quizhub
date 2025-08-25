import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="backdrop-blur-sm rounded-2xl shadow-lg py-4 px-8 flex justify-end items-center" >
            <ul className="flex flex-row gap-2">
                <li>
                    <Link
                        to="/"
                        className="bg-amber-100 text-amber-900 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 border border-amber-200"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/highscores"
                        className="bg-amber-100 text-amber-900 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 border border-amber-200"
                    >
                        Highscores
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="bg-amber-100 text-amber-900 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 border border-amber-200"
                    >
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
