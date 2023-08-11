import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Card() {

  const [logements, setLogements] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/logements.json")
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


  return (
    <div className="card-style">
      {logements.map((logement) => (
        <Link
          to={`/PageFetch/${logement.id}`}
          key={logement.id}
          className="card"
        >
          <img src={logement.cover} alt={logement.title}></img>
          <p className="card-title">{logement.title}</p>
        </Link>
      ))}
    </div>
  );
}
export default Card;
