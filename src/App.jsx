import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './globalStyles';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';


function App() {
  return (
      <Router>   
        <GlobalStyle />     
        <Navbar />
        <Switch>
          <Route exact component={Home} path='/' />
          <Route component={OurStory} path='/ourstory' />
        </Switch>
        <Footer />
      </Router>      
  );
}

export default App;
