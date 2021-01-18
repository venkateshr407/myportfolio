import React, { Component } from 'react'


export default class Contacthit extends Component {
    render() {
        return (
            <div className="contact-containter">
                <div className="hitmeup">
                    <h1 className="hittext">HIT ME UP...</h1>
                    <div className="media">
                <ul>
                    <li><a href="https://instagram.com/venky__creations/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-instagram" aria-hidden="true"></i> </a></li>
                    <li><a href="https://twitter.com/venki2venky1" target="_blank" rel="noopener noreferrer" ><i className="fa fa-twitter" ria-hidden="true"></i> </a></li>
                    <li><a href="https://github.com/venkateshr407" target="_blank" rel="noopener noreferrer" ><i className="fa fa-github" aria-hidden="true"></i> </a></li>
                    <li><a href="https://www.linkedin.com/in/venkatesh-r-0571a4178" target="_blank" rel="noopener noreferrer" ><i className="fa fa-linkedin" aria-hidden="true"></i> </a></li>
                </ul>
            </div>
          <div className="hitmail">
                <p><a href="mailto:venkateshr590@gmail.com">  venkateshr590@gmail.com</a>SAY HI <span class="ec ec-raised-hand-with-fingers-splayed"></span></p>
            </div>
            <h5 className="header5"><i className="fa fa-phone"></i>+91 77957 13898 </h5>
                <h5 className="header5"><i className="fa fa-map-marker"></i> Ramanagara, Karnataka, India 562159</h5>
                    <div className="madewith">
                        <h6>Made with <span className='ec ec-sparkling-heart'></span>
                                    by Venkatesh </h6>
                    </div>
             </div>
        </div>
        
        )
    }
}
