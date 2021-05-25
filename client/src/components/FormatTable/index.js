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
                        <td>{deck}</td>
                        <td>{data.datasets[2].data[index]}%</td>
                        <td>{data.datasets[0].data[index]}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default FormatTable