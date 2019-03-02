import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';

import menuRoutes from './routes';
import Header from './ui/components/Header/Header';
import Footer from './ui/components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="grid-container">

          <div className="item1">
            <Header />
          </div>

          <div className="item2">
              {menuRoutes.map(route => (
                    <div key={route.path}>
                      <Route exact={route.exact} path={route.path} render={()=> route.component} />
                    </div>
                  ))}
          </div>

          <div className="item3"> 
            <Footer/>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
