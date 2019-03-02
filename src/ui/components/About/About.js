import React, { Component } from 'react';
import _ from 'lodash';

import pb from '../../../resources/pb.jpg';
import cv from '../../../resources/GD_CV.pdf';
import spirelogo from '../../../resources/GustavDyngesethLogo.jpg';

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
                    <a href="https://www.linkedin.com/in/gustavdyngeseth/">
                    <picture >
                        <img  src={spirelogo} alt="Flowers" className="footerimg"/>
                    </picture>
                    </a>
                    <p className="title"><a href="https://www.spireconsulting.no/">Partner & CTO 👔 Spire Consulting</a></p>
                    <p className="title"><a href="https://www.ntnu.edu/studies/mtdt">M.Sc. Computer Science 🎓 NTNU</a></p>
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