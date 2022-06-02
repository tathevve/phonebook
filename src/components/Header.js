import React from 'react'
import menu from '../menu.png';
import { Link } from 'react-router-dom'

function Header() {
    const logout = () => {
        localStorage.removeItem('authorized')
    }

    return (
        <div className='header'>
            <img src={menu} alt="Logo" /><p><Link to="/">Phonebook</Link></p>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href='#' onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header