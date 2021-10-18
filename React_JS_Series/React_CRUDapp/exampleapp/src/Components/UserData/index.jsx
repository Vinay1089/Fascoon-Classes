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
        const name = this.state.user;
        axios.post('http://localhost:3002/user/',{name})
        .then(output =>{

        console.log(output.data);
        setTimeout(()=>{
            window.location.replace('/')
        },200)
        
        })
    }

    render() {
        return (
            <div className='list'>
                <input className='enter' name="user" onChange={this.handleInputChange} type="text" placeholder="Enter Full Name" />&nbsp;&nbsp;&nbsp;
                <button className='btn' onClick={this.userData}>Submit</button>
            </div>
        )
    }
}
