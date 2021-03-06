import React, { Component } from 'react';

class TournamentCard extends Component {
  freePlayHandler = () => {
    if (!this.props.tournamentState.freePlayClicked) {
      this.props.setTournamentState({
        freePlayClicked: true,
        userInput: 'FreePlay',
      });
    } else {
      this.props.setTournamentState({ freePlayClicked: false, userInput: '' });
    }
  };

  handleInputChange = async (e) => {
    await this.props.setTournamentState({
      ...this.props.tournamentState,
      userInput: e.target.value,
    })
    for (let i = 0; i < this.props.tournaments.length; i++) {
      if (this.props.tournaments[i].tournamentName === this.props.tournamentState.userInput) {
        this.props.setUserDeckState({
          ...this.props.userDeckState,
          deckName: this.props.tournaments[i].deck.deckName,
          whiteMana: this.props.tournaments[i].deck.whiteMana,
          blueMana: this.props.tournaments[i].deck.blueMana,
          blackMana: this.props.tournaments[i].deck.blackMana,
          redMana: this.props.tournaments[i].deck.redMana,
          greenMana: this.props.tournaments[i].deck.greenMana,
        })
        this.props.setFormatState(this.props.tournaments[i].format)
      }
    }

  };
  render() {
    return (
      <>
        <div className="row my-3">
          <div className="input-group col-12">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="tournamentName">
                Tournament:
              </label>
            </div>
            <input
              id="tournamentName"
              list="prevTournaments"
              className="form-control"
              value={this.props.tournamentState.userInput}
              onChange={this.handleInputChange}
              readOnly={this.props.tournamentState.freePlayClicked}
            />
            <datalist id="prevTournaments">
              {this.props.tournaments.map((data) => {
                return <option value={data.tournamentName} key={data._id} />;
              })}
            </datalist>
            <div className="input-group-append">
              <div className="input-group-text">
                <input
                  id="freePlayCheck"
                  onClick={this.freePlayHandler}
                  type="checkbox"
                />
                <label
                  className="form-check-label ml-1"
                  htmlFor="freePlayCheck"
                >
                  Free Play
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TournamentCard;
