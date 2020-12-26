import logo from './logo.svg';
import RegisterForm from './views/Register/RegisterForm'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <RegisterForm/>
        </div>
          Learn React
      </header>
    </div>
  );
}

