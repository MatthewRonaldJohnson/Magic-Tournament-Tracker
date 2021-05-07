import React, { Component } from 'react';

class SubmitBtn extends Component {
  render() {
    return (
      <>
        <div className="row my-1">
          <button type="button" {...this.props} className="btn btn-primary col-12 my-3 p-4">
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default SubmitBtn;
