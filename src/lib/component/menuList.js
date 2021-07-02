import React from "react";

export default function MenuList(props) {

    const dropdownStyle = {
        width: '100%',
        padding: '10px',
        outline: 'none',
        border: '1px solid #518ff4',
        color: '#25396f',
        borderRadius: '10px',
        backgroundColor: '#EAF2FF'
    }

    return (
        <ul className="menu">
            <li className="sidebar-title">Modul Bisma</li>
            <li className="sidebar-item" style={{ borderBottom: '1px solid #D4D4D4',paddingBottom: '10px', marginBottom: '10px' }}>
                <select style={dropdownStyle}>
                    <option value="Modul Penjualan">Modul Penjualan</option>
                </select>
            </li>
            {props.children}
        </ul>
    )
}