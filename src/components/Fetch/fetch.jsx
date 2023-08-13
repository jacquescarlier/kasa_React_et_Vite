import React from 'react';
import {useState, useEffect} from "react"

const urlApi = "./public/logements.json"

function fetch ()  {

    const [logements, setLogements] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(urlApi)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((logements) => {
                setLogements(logements)
            })
            .catch((error) => {
                console.error("error fetching", error);
                console.log("error")
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) return "Loading ....";
    if (error) return "Error ! ";


    return (
       <></>
    );
};

export default fetch;