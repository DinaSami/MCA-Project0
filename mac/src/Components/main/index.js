import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import Admin from '../admin';

import io from 'socket.io-client';
// import Chat from '../chat/chat';

const SERVER_URL = process.env.SERVER_URL || 'localhost:5000/';

const socket = io('localhost:5000/', { transports: ['websocket'] });


function Main() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} socket={socket} />} />
      <Route path="/doctors" render={(props) => <Admin {...props} socket={socket} />} />
      {/* <Route path="/chat" render={(props) => <Chat {...props}     socket={socket} />} /> */}
      {/* <Route>
        <div>404</div>
      </Route> */}
    </Switch>
  );
}

export default Main;
