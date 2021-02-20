import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";

import Register from './views/Authorization/Register/Register.js'
import isGuest from './hoc/isGuest'
import { AuthProvider } from './contexts/AuthContext'
import ChatRoom from './views/ChatRoom/ChatRoom.js'
import GroupChatRoom from './views/ChatRoom/GroupChatRoom.js'
import UserView from './views/User/UserView.js'
import Home from './views/Home/Home.js'
import Main from './views/Layout/Main.js'

import './App.scss';
import RouteWrapper from "./views/Layout/RouteWrapper.js";
import PrivateRouteWrapper from "./views/Layout/PrivateRouter.js";

export default function App() {

  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <PrivateRouteWrapper path="/" exact component={Home} layout={Main}/>
            <Route path="/authorization" component={isGuest(Register)} />
            <RouteWrapper path="/user/:userId" component={UserView} layout={Main}/>
            <RouteWrapper path="/chat/:chatId" exact component={ChatRoom} layout={Main}/>
            <RouteWrapper path="/chat/group/:chatId" component={GroupChatRoom} layout={Main}/>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

