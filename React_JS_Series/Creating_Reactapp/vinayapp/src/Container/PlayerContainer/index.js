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
            {/* {DisplayPlayers()} */}
            <h2>Player Details</h2>
            <h3>Name: {props.match.params.name}</h3>
            <h3>Jersey Number: {props.match.params.jersey}</h3>
            <img src={require('../../Assets/Images/'+ props.match.params.image).default}></img>
        </div>
    )
}
