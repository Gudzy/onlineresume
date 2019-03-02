import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

import pb from '../../../resources/pb.jpg';

class Home extends Component{
    state = {
        about: false,
    }
    render(){
        let { about } = this.state;
        return(
            <div id="home">
                <div className="hero-image" >
                    <img src={pb}></img>
                    <div className="hero-text">
                    <h2>I am Gustav Dyngeseth</h2>
                    <h3>And I'm an Engineer</h3>
                    <button onClick={e => {
                        e.preventDefault();
                        this.setState({ about: true
                        });
                        }}>About</button>
                    </div>
                </div>
            <div className="whitespace">
            {about ? <Redirect to="/about" />: ""}
            </div>
          </div>
        );
    }
}

export default Home;