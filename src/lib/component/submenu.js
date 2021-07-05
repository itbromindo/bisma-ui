import React, { useEffect, useState } from 'react';

export default function SubMenu(props) {

    const [currPathname, setCurrPathname] = useState();

    useEffect(() => {
        setCurrPathname(window.location.pathname);
    }, [])

    return (
        <li className={"submenu-item " + (props.url == currPathname ? "active" : "")}>
            {props.children}
        </li>
    )
}