import React,{Component, lazy , Suspense}  from 'react';
// import Card from './CardUI';
import img1 from '../images/workcopy.jpg';
import img2 from '../images/ootycopy1.jpg';
import img3 from '../images/flowercopy.jpg';
import img4 from '../images/suncopy .jpg';
import img5 from '../images/lepcopy.jpg';
import img6 from '../images/magicinsky1.jpg';
import img7 from '../images/travel.jpg';
import img8 from '../images/metro-wholesale-img.jpg';
import img9 from '../images/sunset.jpg';
const Card = lazy(() => import('./CardUI'))

class Cards extends Component {
    render(){
        return(
            <div className="container-fluid-flex justify-content-center ">
                <div className="row">
                    <Suspense 
                        fallback={
                        <div className="spinner-grow text-primary spinnerStyle" style={{width: "4rem", height: "4rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                      </div>}
                    >
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img1} title="Man at Work"/><br/></div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img2} title="Ooty,Tamil Nadu"/><br/></div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img3} title="Flower"/><br/></div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img4} title="Sunset"/><br/></div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img5} title="Lepakshi,Andhra Pradesh"/><br/></div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img6} title="Bluehole"/><br/></div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img7} title="Travel"/><br/></div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img8} title="Marketing"/><br/></div>
                    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200"><Card imgsrc={img9} title="Nature"/><br/></div>
                    </Suspense>
                </div>

              </div>
//  </div>

       
      
//         )}
//           </Spring>
           );
    }
}
export default Cards;