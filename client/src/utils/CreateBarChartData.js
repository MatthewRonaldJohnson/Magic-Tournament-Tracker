const data = {
    labels: ["Not Updated"],
    datasets: [{
        label: '# of Matches',
        yAxisID: 'y',
        backgroundColor: '#D3202A',
        data: [1],
    }, {
        label: '# of Wins',
        yAxisID: 'y',
        backgroundColor: '#00733E',
        data: [1],
    }, {
        label: 'Win %',
        yAxisID: 'yPercentage',
        backgroundColor: '#0E68AB',
        data: [1],
    },]
}



export default {
    createBarChartData: function (input) {
        const matchups = [];
        const numOfTimesFaced = [];
        const numOfWins = [];
        const winPercentage = [];
        for (let i = 0; i < input.length; i++) {
            const matchData = input[i];
            let indexOfMatch = matchups.findIndex(matchup => matchup === matchData.opponentDeck.deckName)
            if (indexOfMatch === -1) {
                indexOfMatch = matchups.length
                matchups.push(matchData.opponentDeck.deckName)
                numOfTimesFaced.push(0);
                numOfWins.push(0);
                winPercentage.push(0);
            }
            numOfTimesFaced[indexOfMatch]++;
            if (matchData.result) numOfWins[indexOfMatch]++
        }
        for (let i = 0; i < winPercentage.length; i++) {
            winPercentage[i] = (numOfWins[i] / numOfTimesFaced[i]) * 100;
        }
        if (matchups.length > 0) {
            data.labels = matchups;
            data.datasets[0].data = numOfTimesFaced;
            data.datasets[1].data = numOfWins;
            data.datasets[2].data = winPercentage;
        }
        return data
    },

    createFormatChartData: function([decks, tournaments]){
        const deckNames = [];
        const numOfMatches = [];
        const numOfWins = [];
        const winPercentage = [];
        for (let i = 0; i < decks.length; i++) {
            const deck = decks[i];
            let indexOfDeck = deckNames.findIndex(name => name === deck.deckName)
            if (indexOfDeck === -1){
                indexOfDeck = deckNames.length
                deckNames.push(deck.deckName);
                numOfMatches.push(0);
                numOfWins.push(0);
                winPercentage.push(0);
            }
        }
        for (let i = 0; i < tournaments.length; i++) {
            const tournament = tournaments[i];
            let indexToUse = deckNames.findIndex(name => name === tournament.deck.deckName)
            for (let j = 0; j < tournament.tournamentData.length; j++) {
                const match = tournament.tournamentData[j];
                numOfMatches[indexToUse]++;
                if(match.result) numOfWins[indexToUse]++
            }
        }
        for (let i = 0; i < winPercentage.length; i++) {
            winPercentage[i] = (numOfWins[i] / numOfMatches[i]) * 100;
        }
        if (deckNames.length > 0) {
            data.labels = deckNames;
            data.datasets[0].data = numOfMatches;
            data.datasets[1].data = numOfWins;
            data.datasets[2].data = winPercentage;
        }

        return data
    }
}