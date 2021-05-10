import React from 'react'

function CardData(props) {
    if(Array.isArray(props.cardData.oracleText)){
        props.cardData.oracleText[2] = props.cardData.oracleText[1];
        props.cardData.oracleText[1] = "\n // \n"
    }

    return (
        <section className="cardData col-12 col-lg-6 p-2">
            <p>Card Name: {props.cardData.name}</p>
            <p>Mana Cost: {props.cardData.manaCost}</p>
            <p>Type Line: {props.cardData.typeLine}</p>
            <p>Oracle Text: <br />
                    {props.cardData.oracleText}
            </p>
            {props.cardData.typeLine.includes("Creature") && <p>Power/Toughness: {props.cardData.power}/{props.cardData.toughness}</p>}
            {props.cardData.typeLine.includes("Planeswalker") && <p>Starting Loyalty: {props.cardData.loyalty}</p>}
        </section>
    )
}

export default CardData
