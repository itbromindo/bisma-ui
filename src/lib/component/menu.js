import React, { useEffect, useState } from "react";
import SubMenuList from './submenuList';

export default function Menu(props) {

    const [hasSubClass, setHasSubClass] = useState('');
    const [childrenVisibility, setChildrenVisibility] = useState(false);

    useEffect(() => {
        console.log('props.children', props.children);
        if (props.children !== undefined) {
            setHasSubClass('has-sub');
        }
    }, [props.children])

    return (
        <li className={"sidebar-item " + (props.url == window.location.pathname ? 'active' : '') + ' ' + hasSubClass} >
            <div className="sidebar-link" onClick={(_) => {
                setChildrenVisibility(!childrenVisibility);
            }} style={{ cursor:'pointer' }}>
                {props.content}
            </div>
            {
                props.children !== undefined
                    ? <SubMenuList active={childrenVisibility ? 1 : 0} >
                    {props.children}
                </SubMenuList>
                : ''
            }
        </li>
    )
}