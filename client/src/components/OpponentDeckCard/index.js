import React, { Component } from 'react';

class OpponentDeckCard extends Component {
  render() {
    return (
      <>
        <div id="opponent" className="deckInput col-12 col-lg-6 py-2">
          <div className="form-group">
            <label htmlFor="oppDeckname">Opponent Deck Name: </label>
            <input id="oppDeckName" className="form-control" type="text" />
            <div className="manaCheckBox white form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="oWhite" />
              <label className="form-check-label" htmlFor="oWhite">
                White
              </label>
            </div>
            <div className="manaCheckBox blue form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="oBlue" />
              <label className="form-check-label" htmlFor="oBlue">
                Blue
              </label>
            </div>
            <div className="manaCheckBox black form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="oBlack" />
              <label className="form-check-label" htmlFor="oBlack">
                Black
              </label>
            </div>
            <div className="manaCheckBox red form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="oRed" />
              <label className="form-check-label" htmlFor="oRed">
                Red
              </label>
            </div>
            <div className="manaCheckBox green form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="oGreen" />
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
