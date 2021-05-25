import React from 'react'
import TournamentTableRow from "../TournamentTableRow"

function TournamentTable({data}) {
    let winRecord = 0;
    let lossRecord = 0;
    if(!data) data = [];
    console.log(data)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Round</th>
                    <th scope="col">Record</th>
                    <th scope="col">Opp Name</th>
                    <th scope="col">Opp Deck</th>
                    <th scope="col">Result</th>
                    <th scope="col">Notes</th>
                </tr>
            </thead>
            <tbody>
                {data.map((match, index) => {
                    if(match.result) winRecord++
                    else lossRecord++
                    return <TournamentTableRow
                    key={match._id}
                    round={(index+1)}
                    winRecord={winRecord}
                    lossRecord={lossRecord}
                    opponentsName={match.opponentsName}
                    opponentDeck={match.opponentDeck.deckName}
                    wins={match.wins}
                    losses={match.losses}
                    notes={match.notes}
                    result={match.result}
                    />
                })}
            </tbody>
        </table>
    )
}

export default TournamentTable
