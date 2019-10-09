import React from "react";

const ImageCard = props => {
    return (
        <div className="image-of-the-day">
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <img src={props.url}></img>
            <p>{props.explanation}</p>
        </div>
    )
}

export default ImageCard;