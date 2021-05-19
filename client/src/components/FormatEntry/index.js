import React from 'react'

function FormatEntry(props) {
    const handleChange = function(e) {
        props.setFormatState(e.target.value);
    }
    return (
        <div className="row my-3">
          <div className="input-group col-12">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="format">
                Format:
              </label>
            </div>
            <input
              id="format"
              list="formatList"
              className="form-control"
              value={props.formatState}
              onChange={handleChange}
            />
            <datalist id="formatList">
              <option value="Standard" />
              <option value="Pioneer" />
              <option value="Modern" />
              <option value="Historic" />
              <option value="Legacy" />
            </datalist>
          </div>
        </div>
    )
}

export default FormatEntry