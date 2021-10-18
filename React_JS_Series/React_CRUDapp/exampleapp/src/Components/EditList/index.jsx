import React, { Component } from 'react'
import axios from 'axios';
import './index.css'
export default class editList extends Component {

    constructor(props){
        super(props);
        this.state={

            id:props.match.params.id,
            name:props.match.params.name
        }
    }
    handleInputChange=(e) =>{

        //const name= e.target.name;
        const value= e.target.value;
        this.setState({

            name:value
        })

    }
    updateList=(e) =>{
        e.preventDefault();
        const id=this.state.id;
        const name=this.state.name;
        axios.patch('http://localhost:3002/user/'+id,{name}).then(output =>{

        console.log(output.data);

        setTimeout(()=>{
            window.location.replace('/')
        },200)
        
        })
    }

    render() {
        return (
            <div className='parent'>
                <h1>Edit User Details:</h1>
                <input className='list-text' type="text" value={this.state.id} disabled />
                <input className='list-text' name="name" type="text"  onChange={this.handleInputChange} value={this.state.name}  />
                <button className='btn' onClick={this.updateList}>Submit</button>
            </div>
        )
    }
}
