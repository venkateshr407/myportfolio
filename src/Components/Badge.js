import React, { Component } from 'react';
import badge from '../Components/badge.module.css';



export default class Badge extends Component {
    render() {
        return (
            <div className={badge.mai}>
                <img src={this.props.badges} className={badge.badgeImages}/>
                <p className={badge.paragraph}>{this.props.title}</p>
            </div>
        )
    }
}
