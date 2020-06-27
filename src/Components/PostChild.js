import React from 'react';


const PostChild = props => {
    return(
            <div className="postcontainer">
                
                <div className="postcontent">
                    <img src={props.postImage}/>    
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