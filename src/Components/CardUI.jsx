import React from 'react';



const CardUI = props => {
    return (
        
          <div className='card text-center shadow'>
              <div className='overflow'>
                  <img src={props.imgsrc} alt='Image 1' className='card-img-top'/>
              </div>
              <div className='card-body text-dark'>
                  <h4 className=' card-title '> {props.title}</h4>
                  <h4 className='card-titles'> {props.titles}</h4>
              </div>
              {/* <p className='card-text text-secondary'> photograpy</p> */}
              {/* <a herf="#" className='btn btn-outline-success'>Go anywhere</a> */}
              
          </div>
        
    );
}
export default CardUI;