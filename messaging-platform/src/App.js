import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";

import Register from './views/Authorization/Register/Register.js'
import UserList from './views/TestUserList/UserList.js'
import Home from './views/Home/Home.js'
import Main from './views/Layout/Main.js'

import './App.scss';
import RouteWrapper from "./views/Layout/RouteWrapper.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <RouteWrapper path="/" exact component={Home} layout={Main}/>
          <Route path="/authorization" component={Register} />
          <Route path="/lusey" component={UserList} />
        </Switch>
      </div>
    </Router>
  );
}

