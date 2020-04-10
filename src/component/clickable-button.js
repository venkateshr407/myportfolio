import React from 'react';


const CButton = ({link, text}) =>{
    return(
        <div>
            <a href={link} target='_blank' rel="noopener noreferrer" class="clickable-button">{text}</a>
        </div>
    )
}
export default CButton;