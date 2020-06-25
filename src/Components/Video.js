import React from 'react';
import video from '../images/intro.mp4';

const Video = () =>{
    return (
        <div className="container">
             <video autoPlay muted loop>
            <source src={video} type="video/mp4"/> 
            </video>
        </div>
    );
};
export default Video


