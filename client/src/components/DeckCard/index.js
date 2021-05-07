import React, { Component } from 'react';

class DeckCard extends Component {
  state = {
    decks: [],
    deckName: '',
    whiteMana: false,
    blueMana: false,
    blackMana: false,
    redMana: false,
    greenMana: false,
  };

  componentDidMount = () => {
    this.setState({ ...this.state, decks: this.props.decks });
  };

  handleDeckNameChange = async (e) => {
    const deckName = e.target.value;
    const deckParam = deckName.toLocaleLowerCase();
    const checked = await this.state.decks.filter((decks) => {
      return decks.deckName.toLowerCase().includes(deckParam);
    });

    if (deckName === '' || checked.length === 0) {
      this.setState({
        ...this.state,
        whiteMana: false,
        blueMana: false,
        redMana: false,
        greenMana: false,
        blackMana: false,
      });
    } else if (checked.length === 1) {
      this.setState({
        ...this.state,
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
            <label htmlFor="userDeckname">Your Deck Name: </label>
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
                  this.setState({
                    ...this.state,
                    whiteMana: !this.state.whiteMana,
                  })
                }
                checked={this.state.whiteMana}
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
                  this.setState({
                    ...this.state,
                    blueMana: !this.state.blueMana,
                  })
                }
                checked={this.state.blueMana}
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
                  this.setState({
                    ...this.state,
                    blackMana: !this.state.blackMana,
                  })
                }
                checked={this.state.blackMana}
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
                  this.setState({ ...this.state, redMana: !this.state.redMana })
                }
                checked={this.state.redMana}
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
                  this.setState({
                    ...this.state,
                    greenMana: !this.state.greenMana,
                  })
                }
                checked={this.state.greenMana}
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
