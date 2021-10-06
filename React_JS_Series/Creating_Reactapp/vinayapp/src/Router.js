import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import About from './New_Components/About';
import contact from './New_Components/Contact';
import home from './New_Components/Home';
import Players from './New_Components/Players';
import Navigations from './Navigations';
import PlayerContainer from './Container/PlayerContainer';
import index from './Navigations';
export class Router extends Component{

    list ={

      players:[
        {
          "id":1,
          "jursey":7,
          "name":"MS_Dhoni",
          "image":"MSD.jpg"
        },
        {
          "id":2,
          "jursey":18,
          "name":"Virat_Kohli",
          "image":"Virat.jpg"
        },
        {
          "id":3,
          "jursey":45,
          "name":"Rohit_Sharma",
          "image":"Rohit.jpg"
        },
        {
          "id":4,
          "jursey":93,
          "name":"Jasprit_Bumrah",
          "image":"Bumrah.jpg"
        },
        {
          "id":5,
          "jursey":8,
          "name":"Ravindra_Jadeja",
          "image":"Jadeja.jpg"
        },
        {
          "id":6,
          "jursey":15,
          "name":"Bhuvneshwar_Kumar",
          "image":"Buvi.jpg"
        }
      ]
    }

  render(){
    return (
       <div>
       <Navigations /> 
       <Switch>
        <Route exact path='/' component={index} /> 
        <Route exact path='/About' component={About}/>
        <Route exact path='/Contact' component={contact}/>
        <Route exact path='/Home' component={home}/>
        <Route exact path='/players' render= {(props) => <Players {...props} players={this.list.players} /> } />
        <Route exact path='/players/:id/:name/:image' render={PlayerContainer} />
       </Switch>
      </div>
    );
  }
}
export default Router;