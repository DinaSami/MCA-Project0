import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Book from '../home';
import Admin from '../admin';
import Home from '../slideshow/slideshow';

import io from 'socket.io-client';
import Chat from '../chat/chat';

const SERVER_URL = process.env.SERVER_URL || 'localhost:5000/';

const socket = io('localhost:5000/', { transports: ['websocket'] });


function Main() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} socket={socket} />} />
      <Route  exact path="/doctors" render={(props) => <Admin {...props} socket={socket} />} />
      <Route exact path="/booking" render={(props) => <Book {...props} socket={socket} />} />
      <Route path="/chat" render={(props) => <Chat {...props}     socket={socket} />} />
    </Switch>
  );
}

export default Main;
