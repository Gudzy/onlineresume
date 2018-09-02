import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pb from './pb.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      about: false,
      contact: false,

    };
  }

  renderHeader() {
    return(
      <div id="navbar">
        <a id="logo">Gustav Dyngeseth</a>
        <div id="navbar-right">
          <a className={this.state.home? "active" : ""} onClick={e => {
              e.preventDefault();
              this.setState({ home: true, contact: false, about: false
              });
            }}>Home</a>
          <a className={this.state.contact? "active" : ""} onClick={e => {
              e.preventDefault();
              this.setState({ contact:true, home: false, about: false
              });
            }}>Contact</a>
          <a className={this.state.about? "active" : ""} onClick={e => {
              e.preventDefault();
              this.setState({ about: true, contact: false, home: false
              });
            }}>About</a>
        </div>
      </div>
    );
  }

  

  renderHome() {
    return (this.state.home?
      <div id="home">
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>
        <p>HOME</p>

      </div> : ""
    );
  }

  renderContact() {
    return(this.state.contact?
      <div>
        Kontaktinfo
      </div>
    : "");
  }


  renderAbout() {
    return(this.state.about?
      <div className="card">
        <img src={pb} alt="Gustav"></img>
        <h4>Gustav Dyngeseth</h4>
        <p className="title">IT Consultant</p><p className="title">Computer Science student - Norwegian University of Science and Technology</p>
        <div id="myProgress">
  <div id="myBar">40%</div>
</div>
        <p className="title"></p>
        <button class="btn"><i class="fa fa-download"></i>Resume</button>
        <button class="btn"><i class="fa fa-download"></i>Transcript</button>
      </div>
    : "");
  }

  renderFooter() {
    return(
      <div id="footer">
        <div class="footer-social-icons">
            <h4 class="_14">Find me on</h4>
            <ul class="social-icons">
                <li><a href="https://www.linkedin.com/in/gustavdyngeseth/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/GDyngeseth" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/gustavd/" class="social-icon"> <i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div className="grid-container">
        <div className="item1">
          {this.renderHeader()}
        </div>

        <div className="item2">
          {this.renderHome()}
          {this.renderContact()}
          {this.renderAbout()}
        </div>

        <div className="item3"> 
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

export default App;
