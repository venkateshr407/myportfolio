import React from 'react';
import Img from 'react-image';

const PostChild = props => {
    return(
            <div className="postcontainer">
                
                <div className="postcontent">
                    <Img src={props.postImage}/>    
                        <div className="image_title">
                            <h2>{props.onImage}</h2>
                        </div>    
                </div>
                <div className="postcontent">
                    <h1>{props.onText}</h1>
                    <p>{props.onSpan}</p>
                </div>    
            </div>
    );
}
export default PostChild;