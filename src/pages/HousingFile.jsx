import React from 'react';
import Footer from "../components/footer/Footer";
import HousingCarousel from "../components/carousel/HousingCarousel";
import HousingDetail from "../components/housingDetail/HousingDetail";
import HousingDropdown from "../components/housingDropdown/HousingDropdown";
import { useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Header from '../components/header/Header';

const urlApi = "/logements.json"

export default function Fetch() {
    const { id } = useParams();
    const [logements, setLogements] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("id", id)
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
                console.log("json", logements)
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
    
    console.log("logements", logements)
    const logement = logements.find((item) => item.id === id)

    return (
        <div>
            {!logement && (<Navigate to='Page404' replace={true} />)}
            {logement && (
                <div>
                    <div className="container-general">
                        <Header />
                        <HousingCarousel pictures={logement.pictures} title={logement.title} />
                        <HousingDetail logement={logement} />
                        <HousingDropdown description={logement.description} equipments={logement.equipments} />
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    )
}