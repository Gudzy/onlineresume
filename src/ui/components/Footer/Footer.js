import React, { Component } from 'react';
import _ from 'lodash';

import pb4 from '../../../resources/pb4.png';
import spirelogo from '../../../resources/GustavDyngesethLogo.jpg';


class Footer extends Component{
    renderFooter() {
        return(
            <div id="footer">
                <div class="footer-social-icons">
                    <p style={{paddingBottom: "20px",fontSize: "27px",fontWeight:550,color: "#DDDDDD"}}>Contact me</p>
                    <picture >
                        <img  src={pb4} alt="Flowers" className="footerimg"/>
                    </picture>
                    <p style={{paddingBottom: "4px", fontSize: '17px', fontWeight:600}}>
                        <a href="tel:+47 400 19 230">
                        +47 400 19 230
                        </a>
                    </p>
                    
                    <p style={{ fontSize: '16px', fontWeight:600}}>
                        <a href="mailto:gustav.dyngeseth@spireconsulting.no">
                            gustav.dyngeseth@spireconsulting.no
                        </a>
                    </p>
                </div>
                <ul class="social-icons">   
                    <li><a href="https://www.linkedin.com/in/gustavdyngeseth/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/Gudzy" class="social-icon"> <i class="fa fa-github"></i></a></li>
                    <li><a href="https://www.facebook.com/GDyngeseth" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/gustavd/" class="social-icon"> <i class="fa fa-instagram"></i></a></li>
                </ul>
                <p style={{ fontSize: '15px', fontWeight:550}}>
                    Arkitekt Christies gate 7,
                </p>
                <p style={{ fontSize: '15px', fontWeight:550}}>
                    7012 Trondheim
                </p>

                <p style={{fontSize:'17px', fontWeight:700, paddingTop:100}}>
                    2019 © Dyngeseth
                </p>
            </div>
        );
    }
    
    render(){
        return(
            <div >
                {this.renderFooter()}
          </div>
        );
    }
}

export default Footer;