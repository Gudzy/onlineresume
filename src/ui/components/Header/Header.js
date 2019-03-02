import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import menuRoutes from '../../../routes';
import ContactIcon from '@material-ui/icons/Phone';


class Header extends Component{
    state = {
        redirect: false,
        route: '',
        buttons: false,
    }

    scrollDown() {
        window.scrollBy(0, 800);
    }

    

    renderMenu() {
        const { currentRoute } = this.state;
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
                  }}>{this.state.buttons? "Gustav Dyngeseth" : "Gustav Dyngeseth"} </b>
                  
                  
                {this.state.buttons?
                <div id="navbar-right">
                {menuRoutes.map(route => (    
                    <a className={window.location.pathname == route.path ? "active" : ""} onClick={e => {
                            e.preventDefault();
                            this.setState({ route: route.path, redirect: true });
                        }}>{route.icon} {route.name}
                    </a>
                ))}
                <a onClick={e => {
                    e.preventDefault();
                    this.scrollDown();
                    this.setState({ buttons: false, 
                    });
                  }}><ContactIcon/>Contact</a>
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



export default Header;