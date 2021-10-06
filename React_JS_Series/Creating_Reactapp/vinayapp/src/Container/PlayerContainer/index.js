import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';
export default function PlayerContainer(props) {

    // const DisplayPlayers= () =>{
    //     console.log(props);
    // }
    return(
        <div className="container">
            <Link className="back" to='/players'>Go Back</Link>
            <h2>Player Details</h2>
            <h3>{props.match.params.name}</h3>
            <h3>{props.match.params.jursey}</h3>
            <img src={require('../../Assets/Images/'+props.match.params.image)}></img>
        </div>
    )
}
