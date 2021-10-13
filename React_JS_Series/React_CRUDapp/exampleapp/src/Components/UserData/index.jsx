import axios from 'axios'
import React, { Component } from 'react'
import './index.css'
export default class Data extends Component {

    state={

        user:""
    }
    handleInputChange = (e) => {

        const user= e.target.value

        this.setState({
            user: user
        })
    }
    userData = (e) =>{

        e.preventDefault();
        const user = this.state.user;
        axios.post('http://localhost:3002/user/',{user})
        .then(output =>{

        console.log(output.data);
        })
    }

    render() {
        return (
            <div className='list'>
                <input name="user" onChange={this.handleInputChange} type="text" placeholder="Enter Full Name" />&nbsp;&nbsp;&nbsp;
                <button onClick={this.userData}>Submit</button>
            </div>
        )
    }
}
