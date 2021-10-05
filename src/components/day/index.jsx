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
            <h4>A Semana Acadêmica da Escola Politécnica da Unisinos ocorrerá dos dias 18 à 23 de outuburo de 2021, confira nossa programação abaixo e
                <a href='' >faça sua inscrição</a>
            </h4>
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