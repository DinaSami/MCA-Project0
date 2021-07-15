import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Main from './Components/main';
import Chat from './Components/chat/chat';
// import Slideshow from './Components/slideshow/slideshow';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

// import CardExample from './Components/admin/test1';

function App() {
  
  return (
    <>
      <Header />
      <br></br>
      <br></br>
       <Route path='/'>
      {/* <Slideshow/> */}
      <Main />
      </Route>
      <br></br>
      <br></br>
      <Route path='/chat'>
        <Chat/>
      </Route>
      <br></br>
      <br></br>
      <Footer/>
    </>
  );

}

export default App;
