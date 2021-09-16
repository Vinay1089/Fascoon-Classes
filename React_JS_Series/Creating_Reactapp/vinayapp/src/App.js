import logo from './logo.svg';
import './App.css';
import Appheader from './Components/AppHeader';
import AppBody from './Components/AppBody';
import AppFooter from './Components/AppFooter';

function App() {
  return (
    <div className="App">
        <Appheader />
        <AppBody />
        <AppFooter />
    </div>
  );
}

export default App;
