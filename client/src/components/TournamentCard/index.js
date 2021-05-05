import React, { Component } from 'react';

class TournamentCard extends Component {
  state = {
    freePlayClicked: false,
  };

  render() {
    return (
      <>
        <div className="row my-1">
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
            />
            <datalist id="prevTournaments">
              {this.props.tournaments.map((data) => {
                return <option value={data.tournamentName} key={data._id} />;
              })}
            </datalist>
            <div className="input-group-append">
              <div className="input-group-text">
                {/* I need to have an onchange so that when I'm toggled on I change the state of the app to disable the tournament input as well as when a submit is sent to change the tournament selected to be "Freeplay" */}
                <input id="freePlayCheck" type="checkbox" />
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
