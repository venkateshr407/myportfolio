import React, { Component } from 'react'
import project from '../Components/project.module.css';

export default class Project extends Component {
    render() {
        return (
            <div>
                <div className={project.wrapper}>
                    <img src={this.props.BGImage}/>
                        <div className={project.overlay}>
                            <div className={project.content}>
                                <p className={project.text}>{this.props.title}</p>
                                {/* <a href="">project</a> */}
                                <a href={this.props.link} target="_blank" className="btn btn-outline-primary">Project</a>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
