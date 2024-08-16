import logo from './assets/logo.svg';
import Profile from './pages/Profile';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile userName='awesometawkir' />
    </div>
  );
}

export default App;
