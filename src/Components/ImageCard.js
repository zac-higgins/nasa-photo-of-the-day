import React from "react";

const ImageCard = props => {
    return (
        <div className="image-of-the-day">
            <h2>{props.title}</h2>
        </div>
    )
}

export default ImageCard;