import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from './ImageCard'

export default function NasaStuff() {
    const [title, setTitle] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=2QILodeZ0FXikkfaJQefOTHCrk3zmebbSCGdeeog')
            .then( res => {
                console.log("Here's the stuff from NASA: ", res);
                setTitle(res.data.title);
            })
            .catch( err => {
                console.log("The NASA data was not returned", err);
            });
    }, []);
    return (
        <ImageCard title={title}/>
    )
}