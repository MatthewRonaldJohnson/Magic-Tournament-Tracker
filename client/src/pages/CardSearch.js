import React, { useState, useEffect } from 'react'
import API from "../utils/API"
import useDebounce from "../utils/debounceHook";

import CardData from "../components/CardData";
import NoCardFound from "../components/NoCardFound";
import CardImage from "../components/CardImage";
import DFCImage from "../components/DFCImage";

import formatDFCArray from "../utils/formatDoubleFaceCardArrays";

export default function CardSearch() {
    const [searchTerm, setSearchTerm] = useState("research assistant");
    const [noCardFound, setNoCardFound] = useState(false);
    const [cardData, setCardData] = useState({
        name: "",
        manaCost: "",
        typeLine: "",
        oracleText: "",
        imgSource: "",
        power: "",
        toughness: "",
        loyalty: "",
    })

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {

        if (debouncedSearchTerm) {
            API.getCardDataFromScryfall(debouncedSearchTerm)
                .then(res => {
                    let oracle_text, border_crop, mana_cost, power, toughness, loyalty;
                    if(res.data.card_faces){
                        oracle_text = res.data.card_faces.map(card_face => card_face.oracle_text)
                        border_crop = res.data.card_faces.map(card_face => card_face.image_uris?.border_crop)
                        if(!border_crop[0]) border_crop = res.data.image_uris.border_crop
                        mana_cost = formatDFCArray(res.data.card_faces.map(card_face => card_face.mana_cost))
                        power = res.data.card_faces.map(card_face => card_face.power)
                        toughness = res.data.card_faces.map(card_face => card_face.toughness)
                        loyalty = formatDFCArray(res.data.card_faces.map(card_face => card_face.loyalty))
                    } else {
                    ({oracle_text, image_uris: {border_crop}, mana_cost, power, toughness, loyalty} = res.data);
                    }
                    setCardData({
                        name: res.data.name,
                        manaCost: mana_cost,
                        typeLine: res.data.type_line,
                        oracleText: oracle_text,
                        imgSource: border_crop,
                        power: power || '',
                        toughness: toughness || '',
                        loyalty: loyalty || '',
                    })
                    setNoCardFound(false)
                })
                .catch(err => {
                    console.log(err)
                    setNoCardFound(true);
                })

        }


    }, [debouncedSearchTerm])

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-6">
                    <input
                        type="text"
                        className="col-12 col-lg-6 my-3"
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    {!noCardFound && <CardData cardData={cardData} />}
                    {noCardFound && <NoCardFound />}

                </div>
                <div className="col-12 col-lg-6 text-center p-2">
                    {!noCardFound && !Array.isArray(cardData.imgSource) && <CardImage cardData={cardData} />}
                    {!noCardFound && Array.isArray(cardData.imgSource) && <DFCImage cardData={cardData} />}
                </div>
            </div>
        </div>
    )
}
