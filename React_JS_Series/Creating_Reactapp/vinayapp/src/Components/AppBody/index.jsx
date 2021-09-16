import React, { Component } from 'react'

export default class vennus extends Component {
    constructor(props){
        super(props);
        this.state = {

            "firstname":"",
            "lastname":""
        }
    }
    handleInputChange = (e) =>{
        const target= e.target;
        const name= target.name;
        const value= target.value;
        this.setState({

            [name]: value
        })
        console.log(this.state.firstname);
        console.log(this.state.lastname);
    }
    render() {
        return (
            <div>
                <input name="firstname" type="text" onChange={this.handleInputChange} value={this.state.firstname} placeholder="First Name"/><br />
                <input name="lastname" type="text" onChange={this.handleInputChange} value={this.state.lastname} placeholder="Last Name"/><br />
                <button>Submit</button>
            </div>
        )
    }
}
