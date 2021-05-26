import React from 'react'

function FormatTable({data}) {
    console.log(data)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Deck</th>
                    <th scope="col">Win %</th>
                    <th scope="col">Matches Played</th>
                </tr>
            </thead>
            <tbody>
                {data.labels.map((deck,index) => {
                    return (
                    <tr key={deck}>
                        <td>
                                {deck}
                                <br></br>
                                {data.decks[deck].whiteMana ? <div className='wMana'></div> : <></>}
                                {data.decks[deck].blueMana ? <div className='uMana'></div> : <></>}
                                {data.decks[deck].blackMana ? <div className='bMana'></div> : <></>}
                                {data.decks[deck].redMana ? <div className='rMana'></div> : <></>}
                                {data.decks[deck].greenMana ? <div className='gMana'></div> : <></>}
                            </td>
                        <td>{parseFloat(data.datasets[2].data[index].toFixed(3))}%</td>
                        <td>{data.datasets[0].data[index]}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default FormatTable