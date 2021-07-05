import React, { useEffect, useState } from "react";
import SubMenuList from './submenuList';

export default function Menu(props) {

    const [hasSubClass, setHasSubClass] = useState('');
    const [currPathname, setCurrPathname] = useState();
    const [childrenVisibility, setChildrenVisibility] = useState(false);

    useEffect(() => {
        console.log('props.children menu', props.children);
        if (props.children !== undefined) {
            setHasSubClass('has-sub');

            checkIfChildrenIsActive();
        }

        setCurrPathname(window.location.pathname);
    }, [props.children])

    const checkIfChildrenIsActive = () => {
        for (let i = 0; i < props.children.length; i++) {
            const el = props.children[i];
            const url = el.props.url;
            const isActive = url == window.location.pathname;

            if (isActive) setChildrenVisibility(true);
        }
    }

    return (
        <li className={"sidebar-item " + (props.url == currPathname ? 'active' : '') + ' ' + hasSubClass} >
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