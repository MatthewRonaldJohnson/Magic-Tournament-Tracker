import React, { useState, useEffect, useRef } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import SelectOption from '../components/SelectOption';
import API from "../utils/API";

import BarChart from "../components/BarChart";
import dataMaker from "../utils/CreateBarChartData";

export default function Analytics() {
    const [state, dispatch] = useStoreContext();
    const firstTournament = state.tournaments[0];
    const [displayedTournament, setDisplayedTournament] = useState({
        id: '',
        name: "",
        deckUsed: "",
        tournamentData: "",
    })

    const chartData = dataMaker.createBarChartData(displayedTournament.tournamentData);

    const [chartType, setchartType] = useState('bar');

    const handleSelectChange = async (e) => {
        const tournament = state.tournaments.find(tournament => tournament._id === e.target.value)
        setDisplayedTournament({
            id: tournament._id,
            name: tournament.tournamentName,
            deckUsed: tournament.deck.deckName,
            tournamentData: tournament.tournamentData
        })
        setchartType(chartType === 'bar'? 'line':'bar')
    }

    useEffect(() => {
        if(firstTournament){
            setDisplayedTournament({
                id: firstTournament._id,
                name: firstTournament.tournamentName,
                deckUsed: firstTournament.deck.deckName,
                tournamentData: firstTournament.tournamentData
            })
            setchartType(chartType === 'bar'? 'line':'bar')
        }
    }, [firstTournament])


    return (
        <div className="container mt-2">
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="tournamentSelect">Tournament</label>
                    </div>
                    <select
                        className="custom-select"
                        id="tournamentSelect"
                        value={displayedTournament.id}
                        onChange={handleSelectChange}
                    >
                        {state.tournaments.map((tournament, i) => {
                            return <SelectOption
                                selected={i===0? true:false}
                                key={tournament._id}
                                id={tournament._id}
                                text={tournament.tournamentName}
                            />
                        })}
                    </select>
                </div>
            </div>
            <div className="row chartContainer">
                <h1 className="col-12 text-center">{displayedTournament.name}</h1>
                    <BarChart type={chartType} data={chartData}/>
                <h2 className="col-12 text-center">Playing: {displayedTournament.deckUsed}</h2>
            </div>
        </div>
    )
}
