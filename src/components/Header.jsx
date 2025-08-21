import React from 'react'
import Nav from './Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className='flex flex-row text-center justify-around mb-7 border-b-2 border-gray-300 p-5 bg-gray-800 text-white'>
            <FontAwesomeIcon icon={faDungeon} className="text-4xl text-green-600" />
            <h1 className='flex flex-col'>Willkommen auf meiner Quizpage</h1>
            <Nav />
        </header>

    )
}
