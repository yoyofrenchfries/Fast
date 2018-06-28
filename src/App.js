<<<<<<< HEAD
import React, { Component } from 'react';
import './style.css';
=======
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import Home from './Pages/Home'
import Ride from './Pages/Ride'
import Chatting from './Pages/Chatting'
import Setting from './Pages/Setting'
>>>>>>> 919ced7f04974bcfb5e9ddb384efe945056ecd96

const Notfound = () => (<div> ERROR 404 </div>)
const Home = () => (<div> Home Page </div>)
class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
      <div className = 'App'>
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = { Home }/>
            <Route path = '/Ride' component = { Ride }/>
            {/* <Route path = '/Chatting' component = { Chatting }/> */}
            {/* <Route path = '/Setting' component = { Setting }/>  */}
            <Route component = { Notfound }/>
          </Switch>
        </BrowserRouter>
>>>>>>> 919ced7f04974bcfb5e9ddb384efe945056ecd96
      </div>
    );
  }
}

export default App;
