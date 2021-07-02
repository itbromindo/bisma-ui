import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function SubMenu(props) {
    return (
        <BrowserRouter>
            <li className="submenu-item active">
                <Link to={props.to}>
                    {props.title}
                </Link>
            </li>
        </BrowserRouter>
    )
}