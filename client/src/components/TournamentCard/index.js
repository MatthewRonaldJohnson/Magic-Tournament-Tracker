import React, { Component } from 'react';

class TournamentCard extends Component {
  state = {
    freePlayClicked: false,
    userInput: '',
  };

  freePlayHandler = () => {
    if (!this.state.freePlayClicked) {
      this.setState({ freePlayClicked: true, userInput: "FreePlay" });
    } else {
      this.setState({ freePlayClicked: false, userInput: ""})
    }
  };

  handleInputChange = (e) => {
    this.setState({...this.state, userInput: e.target.value})
  }
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
              value={this.state.userInput}
              onChange={this.handleInputChange}
              readOnly={this.state.freePlayClicked}
            />
            <datalist id="prevTournaments">
              {this.props.tournaments.map((data) => {
                return <option value={data.tournamentName} key={data._id} />;
              })}
            </datalist>
            <div className="input-group-append">
              <div className="input-group-text">
                <input id="freePlayCheck" onClick={this.freePlayHandler} type="checkbox" />
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
