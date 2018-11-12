import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Header from './components/header';
import Modal from './components/modal';
class App extends Component {
  render() {
    return (
           <Router>
              <div>
                     <NavBar />
                     <Route path='/' exact strict component={Header} />
                     <Route path='/modal' exact strict component={Modal} /> 
                     
              </div>
          </Router>
    

    );
  }
}

export default App;
