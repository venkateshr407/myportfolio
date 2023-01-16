import React, { Component } from "react";

export default class Contacthit extends Component {
  render() {
    return (
      <div className="contact-containter">
        <div className="hitmeup">
          <h1 className="hittext">HIT ME UP...</h1>
          <div className="media">
            <ul>
              {this.props?.data?.footerLinks?.map((ele, index) => {
                return (
                  <li key={index}>
                    <a
                      href={ele?.link || ''}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={ele?.icon} aria-hidden="true"></i>{" "}
                    </a>
                  </li>
                );
              })}
             
            </ul>
          </div>
          <div className="hitmail">
            <p>
              <a href="mailto:venkateshr590@gmail.com">
                {" "}
                {this.props?.data?.email}
              </a>
              SAY HI{" "}
              <span className="ec ec-raised-hand-with-fingers-splayed"></span>
            </p>
          </div>
          <h5 className="header5">
            <i className="fa fa-phone"></i>+91 77957 13898{" "}
          </h5>
          <h5 className="header5">
            <i className="fa fa-map-marker"></i> Ramanagara, Karnataka, India
            562159
          </h5>
          <div className="madewith">
            <h6>
              Made with <span className="ec ec-sparkling-heart"></span> {" "}
              by Venkatesh{" "}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
