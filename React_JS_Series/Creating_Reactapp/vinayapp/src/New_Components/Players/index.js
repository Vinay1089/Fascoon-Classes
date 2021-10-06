import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
export default function players(props) {

    const renderPlayers = () =>{

        return props.players.map((player) =>(
            <li className="list-1"><Link className="list-2" to={"/players/" + player.id +"/" + player.name + "/"+ player.image}>{player.name}</Link></li>
        ))


    }
    return (
        <div>
            <h1>Our Top Players</h1>
            <ul>{renderPlayers()}</ul>
        </div>
    )
}
