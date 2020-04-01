import React,{Component} from 'react';
import Card from './CardUI';
// import {Spring} from 'react-spring';

import img1 from '../images/workcopy.jpg';
import img2 from '../images/ootycopy1.jpg';
import img3 from '../images/flowercopy.jpg';
import img4 from '../images/suncopy .jpg';
import img5 from '../images/lepcopy.jpg';
import img6 from '../images/treecopy.jpg';
class Cards extends Component {
    render(){
        return(
        //     <Spring
        // from={{opacity: 0}}
        // to={{opacity:1}}>
        // {props=>(
        //     <div style={props}>
            <div className="container-fluid-flex justify-content-center ">
                <div className="row">
                    <div className="col-md-4 cardbox" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img1} title="Man at Work"/><br/></div>
                    <div className="col-md-4 cardbox" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img2} title="Ooty,Tamil Nadu"/><br/></div>
                    <div className="col-md-4 cardbox" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img3} title="Flower"/><br/></div>
                    <div className="col-md-4 cardbox" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img4} title="Sunset"/><br/></div>
                    <div className="col-md-4 cardbox" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img5} title="Lepakshi,Andhra Pradesh"/><br/></div>
                    <div className="col-md-4 cardbox" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img6} title="Niligiris"/><br/></div>
                </div>
              </div>
//  </div>

       
      
//         )}
//           </Spring>
           );
    }
}
export default Cards;