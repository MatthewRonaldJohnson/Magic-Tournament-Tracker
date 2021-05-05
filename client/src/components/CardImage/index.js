import React from 'react'

function CardImage(props) {
    return (
        <img className="h-50"
                        src={props.cardData.imgSource}
                        alt={props.cardData.name + " card art"} />
    )
}

export default CardImage
