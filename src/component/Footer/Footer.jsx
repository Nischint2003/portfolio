import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <div className="top-content">
          <h3 className="heading">FIND ME ON</h3>
          <p>
            Feel free to <span>connect</span> with me
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/nischint-dash-13833322b/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square bx-md"></i>
            </a>
            <a href="https://github.com/Nischint2003/" target="_blank">
              <i className="bx bxl-github bx-md"></i>
            </a>
            <a href="https://www.instagram.com/nischint_dash/" target="_blank">
              <i className="bx bxl-instagram bx-md"></i>
            </a>
            <a href="https://x.com/Nischint03" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=cMRBi0rI3iwb&format=png&color=000000"
                alt="x"
              />
            </a>
          </div>
        </div>
        <hr />
      </div>
      <div className="footer-bottom">
        <p>Designed and Developed by Nischint Dash</p>
        <p>Copyright&copy;nischintdash</p>
      </div>
    </div>
  );
};

export default Footer;
