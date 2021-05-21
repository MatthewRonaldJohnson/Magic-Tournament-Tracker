import React from 'react'

function SelectOption(props) {
    return (
        <option
            value={props.value}
            >
            {props.text}
        </option>
    )
}

export default SelectOption


