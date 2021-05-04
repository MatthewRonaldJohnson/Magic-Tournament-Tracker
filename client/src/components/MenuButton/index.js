import React from 'react';
import { Link } from "react-router-dom";

function MenuButton(props) {
    return (
        <Link to={props.location} className={"btn col-12 my-3 p-4 "+props.btnClass}>
            {props.text}
        </Link>
    )
}

export default MenuButton
