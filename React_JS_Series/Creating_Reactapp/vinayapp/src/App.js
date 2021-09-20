import logo from './logo.svg';
import './App.css';
import Appheader from './Components/AppHeader';
import AppBody from './Components/AppBody';
import AppFooter from './Components/AppFooter';

function App() {
  let name ={

    "username":"Vinay",
    "location":"Hyderabad"
  }
  return (
    <div className="App">
        <Appheader username={name.username} location={name.location} />
        <AppBody />
        <AppFooter />
    </div>
  );
}

export default App;
