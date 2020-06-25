import React from 'react';
import {Container} from 'react-bootstrap';
// import {Image} from 'reactstrap';

import theImage from '../images/tirucopy1.jpg';
import theImage1 from '../images/featured.jpg';
import theImage2 from '../images/intropic1.jpg';


export const Heading = (props) => (

<Container>
        {props.children}
        <br/>
        <section className="galleryachive">
          <div className="gallerydiv">
          <h1 className="gallerytext">Work, i'm proud off ...</h1>
          <p className="gallerypara"> Featured in social media, this made me to motivate in my photography.</p>
          </div>
        </section>
        <br/>

        <div className="row featurette" data-aos="fade-left" data-aos-delay="200">
          <div className="col-md-7 m-3">
            <h2 className="featurette-heading">Motorolain:
             <span className="text-muted"> Hi Venkatesh, we love this #motograph. Keep sharing your #motography with us </span></h2>
            <p className="lead">Comment via Twiter Motorola India</p>
          </div>
          <div className="col">
          <img src={theImage} className="img-fluid rounded "  />
          </div>
        </div>
<br/>
<br/>
<div className="row featurette" data-aos="fade-right" data-aos-delay="200">
 
          <div className="order-md-5 col-md-7 m-3">
            <h2 className="featurette-heading">BBCEarth:
             <span className="text-muted"> Hi there, We love this photo and we were wondering if we could use it for BBC Earth social,website or digital ?  </span></h2>
            <p className="lead">Comment via Instagram @BBCEarth</p>
          </div>
          <div className="col2">
          <img src={theImage2} className="img-fluid rounded "  />
          </div>
          
        </div>
        <br/>
        <br/>
        
        
<br/>
<br/>
        <div className="row featurette" data-aos="fade-left" data-aos-delay="200">
          <div className="col-md-7 m-3">
            <h2 className="featurette-heading">Motorolain:
             <span className="text-muted"> Without a shadow of doubt, these #motographs perfectly capture drama, mystery and mood ! </span></h2>
            <p className="lead">Featured @ Motorola India , Instagram</p>
          </div>
          <div className="col">
          <img src={theImage1} className="img-fluid rounded "  />
          </div>
        </div>
        <br/>
        <br/>

        <div class="move-up">
        <span><a class="btn" href="#"><i class="fa fa-arrow-circle-up fa-2x " aria-hidden="true"></i></a></span>
    </div>
      
          </Container>
         
// {/*                                                                
//           <div class="col-lg-4">
//             <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
//             <h2>Heading</h2>
//             <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
//             <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
//           </div>
//           <div class="col-lg-4">
//             <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
//             <h2>Heading</h2>
//             <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
//             <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
//           </div>
//         </div> */}

        );
    
