import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
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

    deleteUser=(e)=>{

        e.preventDefault();
        const id= e.target.id;
        axios.delete('http://localhost:3002/user/'+ id).then(output =>{
            console.log(output.data);
            setTimeout(()=>{
                window.location.reload('/')
            },200)
        })
    }
    render() {
        return (
            <div className='main'>
                <h1>This is my Userlist</h1>
                {this.state.users.map((user=>
                <div className='list-main'>
                    <li className='List-items' id={user.id}>{user.name}</li>
                    <Link className='edit' to={"/editlist/" + user.id + "/" + user.name}>Edit</Link>
                    <button className='button' id={user.id} onClick={this.deleteUser}>Delete</button>
                </div>
                    ))}
            </div>
        )
    }
}
