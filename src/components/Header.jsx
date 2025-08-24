import React from 'react'
import Nav from './Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="relative w-full flex items-center justify-between px-8 py-6 bg-amber-900/95 shadow-md mb-12">
                <FontAwesomeIcon icon={faDungeon} className="text-4xl text-lime-500 drop-shadow" />
            <div className="flex items-center gap-4">
                <h1 className="text-2xl text-center font-bold text-amber-100 tracking-wide ">Willkommen auf meiner Quizpage</h1>
            </div>
            <Nav />
        </header>
    )
}
