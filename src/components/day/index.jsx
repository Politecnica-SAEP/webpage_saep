import React, { Fragment, useEffect, useState } from "react";
import Cards from '../../api/data.json'
import Card from "../card";

import './style.css'

export default function Day(props) {

    const [areaExpanded, setAreaExpanded] = useState(false);
    const [filteredCards, setFilteredCards] = useState([]);

    const handleClick = () => {
        setAreaExpanded(!areaExpanded);
    }

    const renderCards = () => filteredCards.map((card, index) => <Card key={index} {...card} />)
    

    useEffect(() => {

        setFilteredCards(Cards.filter(card => {
            return card.dia === props.day.toString();
        }))
    }, [props])

    return (
        <Fragment>
            <div className='dropdown' onClick={handleClick}>
                <h2>{props.title}</h2>
                <div className={areaExpanded ? 'area-expanded' : 'area-closed'} />
            </div>
            {areaExpanded &&
                <div className='schedule-open'>
                    {renderCards()}
                </div>
            }
        </Fragment>
    );
}