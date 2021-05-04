import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuButton from "../components/MenuButton";

export default function Menu() {
    return (
        <div className="container my-3">

            <div className="row">
                <MenuButton location="/MatchInput" text="Match Input" btnClass="btn-primary"/>
                <MenuButton location="/Analytics" text="Analytics" btnClass="btn-secondary"/>
                <MenuButton location="/LifeCounter" text=" Life Counter" btnClass="btn-primary"/>
                <MenuButton location="/CardSearch" text="Card Search" btnClass="btn-secondary"/>
            </div>
        </div>
    )
}
