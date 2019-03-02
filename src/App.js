import React, { Component } from 'react';
import './App.css';
import Home from './ui/components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';

import pb4 from './resources/pb4.png';
import menuRoutes from './routes';
import Header from './ui/components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: false,
      home: true,
      about: false,
      contact: false,
      experience: false,
      cvnor: false,
      cveng: false
    };
  }

  scrollDown() {
    window.scrollBy(0, 800);
  }

  renderHeader() {
    return(
      <div>
      <button  className={this.state.buttons?"hide":"show"} onClick={e => {
              e.preventDefault();
              this.setState({ buttons: !this.state.buttons
              });
            }}><i class="fa fa-bars"></i></button>
      {this.state.buttons?
      <div id="navbar">    
        <b id="logo" onClick={e => {
              e.preventDefault();
              this.setState({ home: true, contact: false, about: false, buttons: false, experience: false,
              });
            }}>{this.state.buttons? "Gustav Dyngeseth" : "Gustav Dyngeseth"} </b>
            

        {this.state.buttons?
        <div id="navbar-right">
          <a className={this.state.home? "active" : ""} onClick={e => {
              e.preventDefault();
              this.setState({ home: true, contact: false, about: false, buttons: false, experience: false
              });
            }}><i class="fa fa-home"></i> Home</a>

          <a className={this.state.about? "active" : ""} onClick={e => {
              e.preventDefault();
              this.setState({ about: true, contact: false, home: false, buttons: false, experience: false
              });
            }}>About</a>
          <a className={this.state.experience? "active" : ""} onClick={e => {
              e.preventDefault();
              this.setState({ experience: true, contact: false, home: false, about: false, buttons: false,
              });
            }}>Experience</a>
          <a className={this.state.contact? "active" : ""} onClick={e => {
              e.preventDefault();
              this.scrollDown();
              this.setState({ buttons: false, experience: false, contact: false, home: false, about: false, buttons: false, contact: true,
              });
            }}>Contact</a>
          <a id="close" onClick={e => {
              e.preventDefault();
              this.setState({ buttons: !this.state.buttons
              });
            }}><i class="fa fa-close"></i></a>
        </div> : ""}
      </div> : ""}
      </div>
    );
  }
  

  renderExperience() {
    return(this.state.experience?
      <div>
        
      </div>
    : "");
  }

  renderFooter() {
    return(
      <div id="footer">
        <div class="footer-social-icons">
            <h4 class="_14">Contact me</h4>
            <picture >
              <img  src={pb4} alt="Flowers" className="footerimg"/>
            </picture>
            <a href="mailto:gustav.dyngeseth@spireconsulting.no">
            <p>gustav.dyngeseth@spireconsulting.no</p>
            </a>
            <p>+ 47 400 19 230</p>
            <ul class="social-icons">   
                <li><a href="https://www.linkedin.com/in/gustavdyngeseth/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
                <li><a href="https://github.com/Gudzy" class="social-icon"> <i class="fa fa-github"></i></a></li>
                <li><a href="https://www.facebook.com/GDyngeseth" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/gustavd/" class="social-icon"> <i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
      </div>
    )
  }


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
            {this.renderFooter()}
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
