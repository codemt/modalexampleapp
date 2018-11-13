import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import NavBar from './components/navbar';
import AppModal from './components/modal';
import InquiryContainer from './components/inquiries';
import About from './components/about';
class App extends Component {
  render() {
    return (
      <Router>
              <div>
                     <NavBar />
                     <Route path='/' exact strict component={AppModal} />
                      <Route path='/inquiries' exact strict component={InquiryContainer} />
                      <Route path='/about' exact strict component={About} />
                     
              </div>
          </Router>
    

    );
  }
}

export default App;
