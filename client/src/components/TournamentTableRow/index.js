import React from 'react'

function TournamentTableRow({ round, winRecord, lossRecord, opponentsName, opponentDeck, wins, losses, notes, result }) {
    return (
        <tr>
            <th scope="row">{round}</th>
            <td>{winRecord}-{lossRecord}</td>
            <td>{opponentsName}</td>
            <td>
                {opponentDeck.deckName}
                <br></br>
                {opponentDeck.whiteMana ? <div className='wMana'></div> : <></>}
                {opponentDeck.blueMana ? <div className='uMana'></div> : <></>}
                {opponentDeck.blackMana ? <div className='bMana'></div> : <></>}
                {opponentDeck.redMana ? <div className='rMana'></div> : <></>}
                {opponentDeck.greenMana ? <div className='gMana'></div> : <></>}
            </td>
            <td>{result ? "Win" : "Loss"} ({wins}-{losses})</td>
            <td>{notes}</td>
        </tr>
    )
}

export default TournamentTableRow
