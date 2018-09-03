import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pb from './pb.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: true,
      home: true,
      about: false,
      contact: false,

    };
  }

  buttonFunction(x) {
    x.classList.toggle("change");
}

  renderHeader() {
    return(
      <div id="navbar">


        <a id="logo" onClick={e => {
              e.preventDefault();
              this.setState({ buttons: !this.state.buttons
              });
            }}>{this.state.buttons? "Gustav Dyngeseth" : "Gustav Dyngeseth"} </a>
        {this.state.buttons?
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
        </div> : ""}
      </div>
    );
  }

  

  renderHome() {
    return (this.state.home?
      <div id="home">
        <div className="hero-image">
        <div className="hero-text">
          <h1>I am Gustav Dyngeseth</h1>
          <h3>And I'm an Engineer</h3>
          <button onClick={e => {
              e.preventDefault();
              this.setState({ about: true, home: false
              });
            }}>About</button>
        </div>
      </div>
      </div> : ""
    );
  }

  renderContact() {
    return(this.state.contact?
      <div>
        <p>Lets talk!</p>
        <p> e-mail: gustdyn@gmail.com</p>
        <p>tlf: +47 40 01 92 30</p>
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
