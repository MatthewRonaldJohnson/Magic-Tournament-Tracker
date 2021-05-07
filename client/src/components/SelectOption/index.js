import React from 'react'

function SelectOption(props) {
    return (
        <option
            value={props.id}
            >
            {props.text}
        </option>
    )
}

export default SelectOption


