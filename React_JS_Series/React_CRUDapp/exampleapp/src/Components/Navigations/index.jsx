import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
export default function Navigations() {
    return (
        <div className="container">
            <ul>
                <li className='item'><Link className='item1' to='/'>All Users List</Link></li>
                <li className='item'><Link className='item1' to='/userdata'>Add User</Link></li>
            </ul>
        </div>
    )
}
