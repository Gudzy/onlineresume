import React, { Component } from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';

import pb from '../../../resources/pb.jpg';
import cv from '../../../resources/GD_CV.pdf';

class About extends Component{
    state = {
        about: false,
        cvnor: false
    }

    renderNorCV() {
        let { cvnor } = this.state; 
        return (
            cvnor ? <object className="pdf" data={cv} /> : ""
        );
    }

    render() {
        return(
            <div>
                <div className="card">
                    <img src={pb} alt="Gustav"/>
                    <h4>Gustav Dyngeseth</h4>
                    <p className="title">IT Consultant</p>
                    <p className="title">Computer Science student - Norwegian University of Science and Technology</p>
                    <div id="myProgress">
                        <div id="myBar">50%</div>
                    </div>
                    <p className="title"></p>
                    <a onClick={e => {
                        e.preventDefault();
                        this.setState({ cvnor: !this.state.cvnor
                        });
                        }}>
                        <button class="btn"><i class="fa fa-show"></i>
                            Curriculum Vitae
                        </button>
                    </a>
                </div>
                {this.renderNorCV()}
            </div>
        );
    }
}

export default About;