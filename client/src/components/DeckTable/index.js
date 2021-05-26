import React from 'react'

function DeckTable({data}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Matchup</th>
                    <th scope="col">Win %</th>
                    <th scope="col">Times Played</th>
                </tr>
            </thead>
            <tbody>
                {data.labels.map((deck,index) => {
                    return (
                    <tr key={deck}>
                        <td>{deck}</td>
                        <td>{parseFloat(data.datasets[2].data[index].toFixed(3))}%</td>
                        <td>{data.datasets[0].data[index]}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default DeckTable