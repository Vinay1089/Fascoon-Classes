import React, { Component } from 'react'
export default class vennus extends Component {
    constructor(props){
        super(props);
        this.state = {

            "firstname":"",
            "lastname":"",
            "output":""
        }
    }
    handleInputChange = (i) =>{
        const target= i.target;
        const name= target.name;
        const value= target.value;
        this.setState({

            [name]: value
        })
        console.log(this.state.firstname);
        console.log(this.state.lastname);
    }
    onOutput = (i) =>{
        const output = parseInt(this.state.firstname) + parseInt(this.state.lastname);
        this.setState({

            output:output
        })
    }
    render() {
        return (
            <div>
                <input name="firstname" type="text" onChange={this.handleInputChange} value={this.state.firstname} placeholder="First Name"/><br />
                <input name="lastname" type="text" onChange={this.handleInputChange} value={this.state.lastname} placeholder="Last Name"/><br />
                <button onClick={this.onOutput}>Submit</button>
                <br /><br />
                <h3>{this.state.firstname} {this.state.lastname}</h3>
                <br /><br />
                <h3>{this.state.output}</h3>
            </div>
        )
    }
}
