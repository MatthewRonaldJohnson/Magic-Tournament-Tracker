import React from 'react'

function TournamentTableRow({round, winRecord, lossRecord, opponentsName, opponentDeck, wins, losses, notes, result}) {
    return (
        <tr>
            <th scope="row">{round}</th>
            <td>{winRecord}-{lossRecord}</td>
            <td>{opponentsName}</td>
            <td>{opponentDeck}</td>
            <td>{result? "Win":"Loss"} ({wins}-{losses})</td>
            <td>{notes}</td>
        </tr>
    )
}

export default TournamentTableRow
