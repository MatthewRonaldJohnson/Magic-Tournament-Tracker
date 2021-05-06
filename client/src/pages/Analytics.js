import React, { useState } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import SelectOption from '../components/SelectOption';
import API from "../utils/API";

import BarChart from "../components/BarChart"

export default function Analytics() {
    const [state, dispatch] = useStoreContext();
    const [displayedTournament, setDisplayedTournament] = useState("")

    const handleSelectChange = (e) => {
        setDisplayedTournament(e.target.value)
    }

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
                        value={displayedTournament}
                        onChange={handleSelectChange}
                    >
                        {state.tournaments.map(tournament => {
                            return <SelectOption
                                key={tournament._id}
                                id={tournament._id}
                                text={tournament.tournamentName}
                            />
                        })}
                    </select>
                </div>
            </div>
            <div className="row chartContainer">
                <h1 className="col-12 text-center">MTG West Prelims</h1>
                    <BarChart />
                <h2 className="col-12 text-center">Playing: Mono-White</h2>
            </div>
        </div>
    )
}
