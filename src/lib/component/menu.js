import React, { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import SubMenuList from './submenuList';

export default function Menu(props) {

    const [hasSubClass, setHasSubClass] = useState('');
    const [childrenVisibility, setChildrenVisibility] = useState(false);

    useEffect(() => {
        if (props.children !== undefined) {
            setHasSubClass('has-sub');
        }
    }, [props.children])

    return (
        <BrowserRouter>
            <li className={"sidebar-item " + (props.active == 1 ? 'active' : '') + ' ' + hasSubClass} >
                <Link to={props.to} className="sidebar-link" onClick={(_) => {
                    setChildrenVisibility(!childrenVisibility);
                }}>
                    <span>{props.title}</span>
                </Link>
                {
                    props.children !== undefined
                        ? <SubMenuList active={childrenVisibility ? 1 : 0} >
                        {props.children}
                    </SubMenuList>
                    : ''
                }
            </li>
        </BrowserRouter>
    )
}