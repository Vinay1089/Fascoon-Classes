import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class List extends Component {

    state={
        users:[],
    }
    componentDidMount(){

        axios.get('http://localhost:3002/user').then(output =>{
            console.log(output.data);
            this.setState({
                users:output.data
            })
            console.log(this.state.users.data);
        })
    }
    render() {
        return (
            <div className='main'>
                <h1>This is my Userlist</h1>
                {this.state.users.map((user=>
                    <li id={user.id}>{user.name}</li>
                    
                    ))}
            </div>
        )
    }
}
