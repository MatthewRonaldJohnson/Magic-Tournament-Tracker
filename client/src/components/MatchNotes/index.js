import React, { Component } from 'react';

class MatchNotes extends Component {
  render() {
    return (
      <>
        <div className="row my-1">
          <div className="col-12">
            <div className="form-row">
              <div className="col-6">
                <label>Wins</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Wins"
                  min="0"
                  max="2"
                />
              </div>
              <div className="col-6">
                <label>Losses</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Losses"
                  min="0"
                  max="2"
                />
              </div>
              <div className="col-12">
                <label>Opponent Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Opponent Name"
                />
              </div>
              <div className="col-12">
                <label>Notes</label>
                <textarea className="form-control" name="" id=""></textarea>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MatchNotes;
