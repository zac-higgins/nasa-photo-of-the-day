import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from './ImageCard'
import { today, yesterday, dayBefore, threeDaysAgo, fourDaysAgo } from '../Components/VariableDate'

export default function NasaStuff() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=2QILodeZ0FXikkfaJQefOTHCrk3zmebbSCGdeeog${today ? `&date=${today}` : ''}`)
            .then( res => {
                console.log("Here's the stuff from NASA: ", res);
                setInfo(res.data);
            })
            .catch( err => {
                console.log("The NASA data was not returned", err);
            });
    }, []);
    return (
        <ImageCard title={info.title} date={info.date} url={info.url} explanation={info.explanation}/>
    )
}