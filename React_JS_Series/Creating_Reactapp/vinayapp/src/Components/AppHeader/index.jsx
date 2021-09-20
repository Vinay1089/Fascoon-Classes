import React from 'react'

export default function Appheader(props) {
    return (
        <div style={{backgroundColor:"darkgray", margin:"10px"}}>
            <h1 style={{textAlign:"center", padding:"10px 5px", color:"white"}}>This is my first introduction to the ReactApp</h1>
            <h3 style={{textAlign:"center", padding:"10px 5px", color:"white"}}>Name: {props.username}</h3>
            <h3 style={{textAlign:"center", padding:"10px 5px", color:"white"}}>Residence: {props.location}</h3>
        </div>
    )
}
