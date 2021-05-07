import React, { useState, useEffect } from 'react'
import API from "../utils/API"
import useDebounce from "../utils/debounceHook";

import CardData from "../components/CardData";
import NoCardFound from "../components/NoCardFound";
import CardImage from "../components/CardImage";

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

        if(debouncedSearchTerm){
            API.getCardDataFromScryfall(debouncedSearchTerm)
                .then(res => {
                    setCardData({
                        name: res.data.name,
                        manaCost:  res.data.mana_cost,
                        typeLine:  res.data.type_line,
                        oracleText:  res.data.oracle_text,
                        imgSource:  res.data.image_uris.border_crop,
                        power: res.data.power || '',
                        toughness: res.data.toughness || '',
                        loyalty: res.data.loyalty || '',
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
                    {!noCardFound && <CardData cardData={cardData}/>}
                    {noCardFound && <NoCardFound />}
                    
                </div>
                <div className="col-12 col-lg-6 text-center p-2">
                {!noCardFound && <CardImage cardData={cardData}/>}

                </div>
            </div>
        </div>
    )
}
