import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect, Link } from 'react-router-dom';

import ContactIcon from '@material-ui/icons/Phone';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


import menuRoutes from '../../../routes';

class Header extends Component{
    state = {
        redirect: false,
        route: '',
        buttons: false,
    }

    scrollDown = () => {
        window.scrollBy(0, 800);
    }

    renderMenu() {
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
                    this.setState({ route: '', redirect: true
                    });
                  }}>Gustav Dyngeseth</b>
                  
                  
                {this.state.buttons?
                <div id="navbar-right">
                {menuRoutes.map(route => (    
                    <a className={window.location.pathname == route.path ? "active" : ""} onClick={e => {
                            e.preventDefault();
                            this.setState({ route: route.path, redirect: true });
                        }}>{route.icon} {route.title}
                    </a>
                ))}
                <a onClick={e => {
                    e.preventDefault();
                    this.scrollDown();
                    this.setState({ buttons: false, 
                    });
                  }}><ContactIcon/><Typography>Contact</Typography></a>
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
    
    render(){
        let { redirect, route } = this.state;
        return(
            <div >
                {this.renderMenu()}
                <div >
                    {redirect ? <Redirect to={`${route}`} />: ""}
                </div>
          </div>
        );
    }
}

const styles = {
  list: {
    width: 220,
  },
  fullList: {
    width: 'auto',
  },
  bigAvatar: {
    width: 180,
    height: 100,
  },
};



export default Header;