import React from "react";

import './style.css';

export default function Calendar(props) {

    return(
        <div className="week">
            {props.children}
        </div>
    )
}