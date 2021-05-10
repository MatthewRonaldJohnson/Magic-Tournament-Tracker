import React from 'react'

function DFCImage(props) {
    return (<>
        <img className="h-25"
                        src={props.cardData.imgSource[0]}
                        alt={props.cardData.name + " card art"} />
                        <img className="h-25"
                        src={props.cardData.imgSource[1]}
                        alt={props.cardData.name + " card art"} />
    </>)
}

export default DFCImage
