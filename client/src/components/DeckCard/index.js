import React, { Component } from 'react';

class DeckCard extends Component {
  componentDidMount = () => {
    this.props.setUserDeckState({
      ...this.props.userDeckState,
      decks: this.props.decks,
    });
  };

  handleDeckNameChange = async (e) => {
    const deckName = e.target.value;
    const deckParam = deckName.toLocaleLowerCase();
    const checked = await this.props.decks.filter((decks) => {
      return decks.deckName.toLocaleLowerCase().includes(deckParam);
    });

    if (deckName === '' || checked.length === 0) {
      this.props.setUserDeckState({
        ...this.props.userDeckState,
        whiteMana: false,
        blueMana: false,
        redMana: false,
        greenMana: false,
        blackMana: false,
        deckName: deckName,
      });
    } else if (checked.length === 1) {
      this.props.setUserDeckState({
        ...this.props.userDeckState,
        whiteMana: checked[0].whiteMana,
        blueMana: checked[0].blueMana,
        redMana: checked[0].redMana,
        greenMana: checked[0].greenMana,
        blackMana: checked[0].blackMana,
        deckName: deckName,
      });
    }
  };

  render() {
    return (
      <>
        <div id="user" className="deckInput col-12 col-lg-6 pt-2">
          <div className="form-group">
            <label htmlFor="userDeckName">Your Deck Name: </label>
            <input
              id="userDeckName"
              list="prevDecks"
              className="form-control"
              type="text"
              onChange={this.handleDeckNameChange}
            />
            <datalist id="prevDecks">
              {this.props.decks.map((data) => {
                return <option value={data.deckName} key={data._id} />;
              })}
            </datalist>
            <div className="manaCheckBox white form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="uWhite"
                onChange={() =>
                  this.props.setUserDeckState({
                    ...this.props.userDeckState,
                    whiteMana: !this.props.userDeckState.whiteMana,
                  })
                }
                checked={this.props.userDeckState.whiteMana}
              />
              <label className="form-check-label" htmlFor="uWhite">
                White
              </label>
            </div>
            <div className="manaCheckBox blue form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="uBlue"
                onChange={() =>
                  this.props.setUserDeckState({
                    ...this.props.userDeckState,
                    blueMana: !this.props.userDeckState.blueMana,
                  })
                }
                checked={this.props.userDeckState.blueMana}
              />
              <label className="form-check-label" htmlFor="uBlue">
                Blue
              </label>
            </div>
            <div className="manaCheckBox black form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="uBlack"
                onChange={() =>
                  this.props.setUserDeckState({
                    ...this.props.userDeckState,
                    blackMana: !this.props.userDeckState.blackMana,
                  })
                }
                checked={this.props.userDeckState.blackMana}
              />
              <label className="form-check-label" htmlFor="uBlack">
                Black
              </label>
            </div>
            <div className="manaCheckBox red form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="uRed"
                onChange={() =>
                  this.props.setUserDeckState({
                    ...this.props.userDeckState,
                    redMana: !this.props.userDeckState.redMana,
                  })
                }
                checked={this.props.userDeckState.redMana}
              />
              <label className="form-check-label" htmlFor="uRed">
                Red
              </label>
            </div>
            <div className="manaCheckBox green form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="uGreen"
                onChange={() =>
                  this.props.setUserDeckState({
                    ...this.props.userDeckState,
                    greenMana: !this.props.userDeckState.greenMana,
                  })
                }
                checked={this.props.userDeckState.greenMana}
              />
              <label className="form-check-label" htmlFor="uGreen">
                Green
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DeckCard;
