import React, { Component } from 'react';

class OpponentDeckCard extends Component {
  handleDeckNameChange = async (e) => {
    this.props.setOppDeckState({
      ...this.props.oppDeckState,
      deckName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div id="opponent" className="deckInput col-12 col-lg-6 pt-2">
          <div className="form-group">
            <label htmlFor="oppDeckname">Opponent Deck Name: </label>
            <input
              id="oppDeckName"
              className="form-control"
              type="text"
              onChange={this.handleDeckNameChange}
            />
            <div className="manaCheckBox white form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="oWhite"
                onChange={() =>
                  this.props.setOppDeckState({
                    ...this.props.oppDeckState,
                    whiteMana: !this.props.oppDeckState.whiteMana,
                  })
                }
                checked={this.props.oppDeckState.whiteMana}
              />
              <label className="form-check-label" htmlFor="oWhite">
                White
              </label>
            </div>
            <div className="manaCheckBox blue form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="oBlue"
                onChange={() =>
                  this.props.setOppDeckState({
                    ...this.props.oppDeckState,
                    blueMana: !this.props.oppDeckState.blueMana,
                  })
                }
                checked={this.props.oppDeckState.blueMana}
              />
              <label className="form-check-label" htmlFor="oBlue">
                Blue
              </label>
            </div>
            <div className="manaCheckBox black form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="oBlack"
                onChange={() =>
                  this.props.setOppDeckState({
                    ...this.props.oppDeckState,
                    blackMana: !this.props.oppDeckState.blackMana,
                  })
                }
                checked={this.props.oppDeckState.blackMana}
              />
              <label className="form-check-label" htmlFor="oBlack">
                Black
              </label>
            </div>
            <div className="manaCheckBox red form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="oRed"
                onChange={() =>
                  this.props.setOppDeckState({
                    ...this.props.oppDeckState,
                    redMana: !this.props.oppDeckState.redMana,
                  })
                }
                checked={this.props.oppDeckState.redMana}
              />
              <label className="form-check-label" htmlFor="oRed">
                Red
              </label>
            </div>
            <div className="manaCheckBox green form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="oGreen"
                onChange={() =>
                  this.props.setOppDeckState({
                    ...this.props.oppDeckState,
                    greenMana: !this.props.oppDeckState.greenMana,
                  })
                }
                checked={this.props.oppDeckState.greenMana}
              />
              <label className="form-check-label" htmlFor="oGreen">
                Green
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OpponentDeckCard;
