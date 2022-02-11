import React from 'react';

const ImageCard = (props) => {
    return(
        <div className="column">
            <img src={props.imageUrl} className={props.class + " img"} alt="Products"/>
        </div>
    )
}

export default ImageCard;