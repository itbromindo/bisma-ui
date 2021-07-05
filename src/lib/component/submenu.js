import React from "react";

export default function SubMenu(props) {
    return (
        <li className={"submenu-item " + (props.url == window.location.pathname ? "active" : "")}>
            {props.children}
        </li>
    )
}