import React, { useEffect, useState } from "react";

export default function SubMenuList(props) {

    const [active, setActive] = useState('none');

    useEffect(() => {
        if (props.active && props.active == '1') {
            setActive('block');
        } else {
            setActive('none')
        }
    }, [props.active])

    return (
        <ul className="submenu" style={{ display: active }}>
            {props.children}
        </ul>
    )
}