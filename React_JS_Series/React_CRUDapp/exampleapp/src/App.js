import logo from './logo.svg';
import './App.css';
import List from './Components/UserList';
import Data from './Components/UserData';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import editList from './Components/EditList';
import Navigations from './Components/Navigations';

function App() {
  return (
    <Router>
      <Navigations />
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/userdata" component={Data} />
        <Route exact path="/editlist/:id/:name" component={editList} />
      </Switch>
    </Router>
  );
}

export default App;
