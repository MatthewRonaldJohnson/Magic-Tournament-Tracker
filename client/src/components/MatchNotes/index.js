import React, { Component } from 'react';

class MatchNotes extends Component {
  render() {
    return (
      <>
        <div class="row my-1">
          <div class="col-12">
            <div class="form-row">
              <div class="col-6">
                <label>Wins</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Wins"
                  min="0"
                  max="2"
                />
              </div>
              <div class="col-6">
                <label>Losses</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Losses"
                  min="0"
                  max="2"
                />
              </div>
              <div class="col-12">
                <label>Opponent Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Opponent Name"
                />
              </div>
              <div class="col-12">
                <label>Notes</label>
                <textarea class="form-control" name="" id=""></textarea>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MatchNotes;
