import React, { Component } from 'react'
import './index.css'
import {Link} from 'react-router-dom'
export default class index extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Indian CricketClub</h1>
                <ul class="list">
                    <li><Link class="link" to='/about'>About US</Link></li>
                    <li><Link class="link" to='/home'>HomePage</Link></li>
                    <li><Link class="link" to='/contact'>Contact US</Link></li>
                    <li><Link class="link" to='/players'>Players</Link></li>
                </ul>
            </div>
        )
    }
}
