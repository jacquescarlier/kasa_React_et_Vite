import React from 'react';
import Accordion from '../accordions/Accordion';

const title = ["Description", "Équipements"]

const HousingDropdown = ({ description, equipments }) => {

    return (
        <section className="accordionSection ">
            <div className="accordionBody">
                <Accordion key={title} title={title[0]} content={<p>{description}</p>} />
            </div>
            <div className="accordionBody">
                <Accordion key={title} title={title[1]} content={<ul>{equipments.map((equipement) =>
                    <li key={equipement}>{equipement}</li>)}
                </ul>} />
            </div>
        </section>
    );
};
export default HousingDropdown;