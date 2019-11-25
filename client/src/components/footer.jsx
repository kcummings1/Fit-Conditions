import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
        <footer>
        <div className="footer">
        <div className="container">
          <div className="social-icon">
            <div className="col-md-4">
              <ul className="social-network">
                <li><a href="#" className="fb tool-tip" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className="twitter tool-tip" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className="gplus tool-tip" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#" className="linkedin tool-tip" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#" className="ytube tool-tip" title="You Tube"><i className="fa fa-youtube-play"></i></a></li>
              </ul>
            </div>
          </div>
  
          <div className="col-md-4 col-md-offset-4">
            <div className="copyright">
              &copy; Fit Conditions. All Rights Reserved.
              
            </div>
          </div>
        </div>
  
        <div className="pull-right">
          <a href="#home" className="scrollup" aria-label="scroll up"><i className="fa fa-angle-up fa-3x"></i></a>
        </div>
      </div>
      </footer>
    );
  }
}

export default Footer;
