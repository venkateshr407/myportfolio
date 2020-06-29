import React from 'react';
import PostChild from '../Components/PostChild';
import theImage from '../images/tirucopy1.jpg';
import theImage1 from '../images/featured.jpg';
import theImage2 from '../images/intropic1.jpg';
import motherlove from '../images/motherlove.jpg';

const PostParent = () => {
    return(
        <div>
            <section className="galleryachive">
                <div className="gallerydiv">
                    <h1 className="gallerytext">Work, i'm proud off ...</h1>
                    <p className="gallerypara"> Featured in social media, this made me to motivate in my photography.</p>
                </div>
            </section>
            
            <PostChild  
                postImage={theImage} 
                onImage="Tirupati, Andhra pradesh"
                onText="Hi Venkatesh, we love this #motograph. Keep sharing your #motography with us"
                onSpan="Comment via Twiter Motorola India"
            />
            <PostChild 
                postImage={theImage2}
                onImage="lepakshi, Andhra pradesh"
                onText=" Hi there, We love this photo and we were wondering if we could use it for BBC Earth social,website or digital ? "
                onSpan="Comment via Instagram @BBCEarth"
            />
            <PostChild 
                postImage={theImage1}
                onImage="Landscape"
                onText="Without a shadow of doubt, these #motographs perfectly capture drama, mystery and mood ! "
                onSpan="Featured @ Motorola India, Instagram"
            />
            <PostChild 
                postImage={motherlove}
                onImage="Reflection of Mother's love "
                onText="Your #motograph has us awestruck 😍"
                onSpan="Comment via Twiter Motorola India"
            />
        </div>
    );
}
export default PostParent;